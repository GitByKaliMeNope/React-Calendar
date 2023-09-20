import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'; 


const CalendarComponent = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState('');

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Zurücksetzen der ausgewählten Uhrzeit beim Ändern des Datums
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleAppointmentSelection = () => {
    if (selectedDate && selectedTime) {
      const newAppointments = [...appointments, { date: selectedDate, time: selectedTime }];
      setAppointments(newAppointments);
      setSelectedDate(null);
      setSelectedTime(null);
    }
  };

  const handleNewAppointmentChange = (event) => {
    setNewAppointment(event.target.value);
  };

  const handleAddNewAppointment = () => {
    if (newAppointment && selectedDate) {
      const newAppointments = [...appointments, { date: selectedDate, time: newAppointment }];
      setAppointments(newAppointments);
      setNewAppointment('');
    }
  };

  const renderCalendar = () => {
    return (
      <div className="calendar-container">
        <h2>Select a date:</h2>
        <Calendar onClickDay={handleDateClick} value={selectedDate} />
      </div>
    );
  };

  const renderAppointmentOptions = () => {
    return (
      <div className="appointment-container">
        <h2>Your selected date: {selectedDate.toDateString()}</h2>
        <h2>Select an appointment time:</h2>
        <div className="time-slots">
          {props.availableTimes.map((time) => (
            <div
              key={time}
              className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
              onClick={() => handleTimeSelection(time)}
            >
              {time}
            </div>
          ))}
        </div>
        <button onClick={handleAppointmentSelection} className="button">
          Select Appointment
        </button>
        <h2>Add a new appointment:</h2>
        <div>
          <input
            type="text"
            placeholder="Enter a new appointment time"
            value={newAppointment}
            onChange={handleNewAppointmentChange}
          />
          <button onClick={handleAddNewAppointment} className="button">
            Add Appointment
          </button>
        </div>
      </div>
    );
  };

  const renderAppointmentsForDate = () => {
    const appointmentsForDate = appointments.filter((appointment) =>
      appointment.date.toDateString() === selectedDate.toDateString()
    );

    return (
      <div className="appointments-for-date">
        <h2>Appointments for {selectedDate.toDateString()}:</h2>
        <ul>
          {appointmentsForDate.map((appointment, index) => (
            <li key={index}>
              {appointment.time}
              <button onClick={() => handleDeleteAppointment(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const handleDeleteAppointment = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
  };

  return (
    <div className="calendar-app">
      {selectedDate && selectedTime ? (
        <>
          {renderAppointmentOptions()}
          {renderAppointmentsForDate()}
        </>
      ) : (
        renderCalendar()
      )}
    </div>
  );
};

export default CalendarComponent;
