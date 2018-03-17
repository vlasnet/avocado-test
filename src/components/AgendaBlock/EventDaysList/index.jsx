import React from 'react';
import styled from 'styled-components';
import EventDay from "../EventDay";

const Days = styled.div`
    display: flex;
    justify-content: flex-start;
    max-width: 88%;
    min-height: 30px;
    margin: 0 auto;
`;

const EventDaysList = props => {
    let eventDays = props.eventDays;
    return (
        <Days>
            {eventDays.map(day => (
                <EventDay key={day} day={day} />
            ))}
        </Days>
    );
};

EventDaysList.propTypes = {};

export default EventDaysList;
