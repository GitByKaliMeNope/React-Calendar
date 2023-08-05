import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarT = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [appointments, setAppointments] = useState([]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };
 
  const handleAppointmentSelection = (time) => {
    const newAppointments = [...appointments, { date: selectedDate, time }];
    setAppointments(newAppointments);
    setSelectedDate(null);
  };

  const renderCalendar = () => {
    // Rendering logic for the calendar component goes here
    // This is just a placeholder for illustration purposes

    return (
      <div>
        <h2>Select a date:</h2>
        {<Calendar />}
        {<button onClick={() =>{selectedDate(this.date)}} />}
        {(date) => {
        setSelectedDate(this.date);
        return(<span><h2>Ihr Termin ist am: {this.date}</h2></span>)}}
      </div>
    );
  };

  const renderAppointmentOptions = () => {
    // Rendering logic for the appointment options goes here
    // This is just a placeholder for illustration purposes

    return (
      <div>
        <h2>Select an appointment time:</h2>
        {/* Render your appointment options UI here */}
        {/* For each available time slot, display a button or a clickable element */}
        {/* When a time slot is clicked, call handleAppointmentSelection(time) */}
      </div>
    );
  };

  return (
    <div>
        
      {selectedDate ? renderAppointmentOptions() : renderCalendar()}
    </div>
  );
};

export default CalendarT;