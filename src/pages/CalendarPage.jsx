// Importing Components from node_modules
import React from 'react'

// Import Styling
import '../stylesheets/event/EventCalendar.scss';

const CalendarPage = () => {
  return (
    <div className="page--body upcoming-events">
      <h2 className="page--title upcoming-events">Upcoming Events</h2>
      <div className='page--description upcoming-events'>
        Interested to see what's coming down the pipe? Take a peak at our calendar to see things in their early phases
      </div>
      <div className='calendar-container'>
        <iframe
          title="event-calendar"
          src="https://calendar.google.com/calendar/embed?src=c_jqe8o487n3o90hra8fgg7foq2k%40group.calendar.google.com&ctz=America%2FEdmonton"
          style={{ border: 0}}
          frameborder="0"
          scrolling="no"
        />
      </div>
    </div>
  )
}

export default CalendarPage
