import React from 'react';

// Import Styling
import '../stylesheets/event/EventCard.scss';

// Note: Right or Left is dependent on what side the image is placed on
const EventCardLeft = (eventInfo) => (
  <div className="event-card left">
    <div className="row">

      <div className="image-left col-lg-3 col-md-4 d-none d-md-block ">
        <img
          src={eventInfo.imageSource}
          alt={eventInfo.alt}
          style={{ width: '100%' }}
        />
      </div>
      <div className="description-right col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <h4 className="event--title">{eventInfo.eventName}</h4>
        <p>
          {' '}
          {eventInfo.children}
          {' '}
        </p>
      </div>

    </div>
  </div>
);

const EventCardRight = (eventInfo) => (
  <div className="event-card right">
    <div className="row">

      <div className="description-left col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <h4 className="event--title">{eventInfo.eventName}</h4>
        <p>
          {' '}
          {eventInfo.children}
          {' '}
        </p>
      </div>
      <div className="image-right col-lg-3 col-md-4 d-none d-md-block">
        <img
          src={eventInfo.imageSource}
          alt={eventInfo.alt}
          style={{ width: '100%' }}
        />
      </div>

    </div>
  </div>
);

export {
  EventCardRight,
  EventCardLeft,
};
