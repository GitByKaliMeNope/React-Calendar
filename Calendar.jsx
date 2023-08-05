import React, { useState } from "react";



const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const monthNames = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ];

  const daysOfWeek =  ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];


  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    setDate(prevDate => {
      const prevMonth = prevDate.getMonth() === 0 ? 11 : prevDate.getMonth() - 1;
      const prevYear = prevMonth === 11 ? prevDate.getFullYear() - 1 : prevDate.getFullYear();
      return new Date(prevYear, prevMonth, 1);
    });
  };

  const nextMonth = () => {
    setDate(prevDate => {
      const nextMonth = prevDate.getMonth() === 11 ? 0 : prevDate.getMonth() + 1;
      const nextYear = nextMonth === 0 ? prevDate.getFullYear() + 1 : prevDate.getFullYear();
      return new Date(nextYear, nextMonth, 1);
    });
  };
  
 const renderDaysOfWeek = (day) => {
  return daysOfWeek.map(dayOfWeek => (
    <td className={day}><div className="cell" key={dayOfWeek}>
      {dayOfWeek}
    </div></td>
  ));
};

  const renderCalendarDays = (day) => {
    const days = [];
    const numDays = daysInMonth(date.getMonth(), date.getFullYear());
    const firstDay = firstDayOfMonth(date.getMonth(), date.getFullYear());

    // Render empty cells for days of previous month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <td className={day}><div className="cell empty" value={`empty${i}`}>
          {""}
        </div></td>
      );
    }

    // Render cells for days of current month
    for (let i = 0; i < numDays; i++) {
      days.push(
        <td className={day}><div className="cell" daysOfWeek={day} value={i}>
          {i + 1}
        </div></td>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth}>{"<"}</button>
        <div className="month-year">
          {monthNames[date.getMonth()]} {date.getFullYear()}
        </div>
        <button onClick={nextMonth}>{">"}</button>
      </div>
      <div className="body">
        <div className="board">
        <table>
            <tr>
            {renderDaysOfWeek('this.day')}
            </tr>
            <tr>
            {renderCalendarDays('this.day')}
            </tr>
        </table>
        </div>
      </div>
    </div>
  );
};

export {Calendar};