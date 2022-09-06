import React from 'react'

const CalendarPage = () => {
  return (
    <div className="page--body upcoming-events">
      <h2 className="page--title upcoming-events">Upcoming Events</h2>
      <iframe title="event-calendar" src="https://calendar.google.com/calendar/embed?src=c_jqe8o487n3o90hra8fgg7foq2k%40group.calendar.google.com&ctz=America%2FEdmonton" style={{border: 0, width:800, height: 600}}frameborder="0" scrolling="no"></iframe>
    </div>
  )
}

export default CalendarPage
