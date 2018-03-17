import React from 'react';
import styled from 'styled-components';
import EventTask from "../EventTask";
import {media} from 'components/Common/media';

const ScheduleWrapper = styled.div`
    height: 115px;
    ${media.desktop`
        max-width: 75%;
        margin-left: 13.30769230769231%;
    `}
    ${media.tablet`
        max-width: 85%;
        margin-left: 10%;
    `}
    ${media.phone`
        max-width: 95%;
        margin-left: 7%;
    `}
    > * {
        &:last-child {
            margin: 0;
        } 
    }
`;

const Schedule = props => {
    const eventSchedule = props.eventSchedule;
    return (
        <ScheduleWrapper>
            {eventSchedule.map(eventTask => (
                <EventTask key={eventTask.id}{...eventTask} />
            ))}
        </ScheduleWrapper>
    );
};

Schedule.propTypes = {};

export default Schedule;
