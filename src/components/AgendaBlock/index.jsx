import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Icon from 'components/Common/Icon';
import Title from 'components/Common/Title';
import icon from './assets/code.png';
import EventDaysList from "./EventDaysList";
import Schedule from "./Schedule";
import {media} from 'components/Common/media';

const AgendaWrapper = styled.div`
    box-sizing: border-box;
    max-width: 100%;
    min-height: 1922px;
    background: #a8dbf0;
    padding-top: 89px;
    padding-bottom: 130px;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
    line-height: 68px; 
    ${media.desktop`width: 88%;`}
    ${media.tablet`width: 95%;`}
    ${media.phone`width: 95%;`}
`;

const AgendaBlock = (prop) => {
    const props = prop.agendaProps;
    return (
        <AgendaWrapper>
            <TitleWrapper>
                <Icon image={icon} width="72" height="53"/>
                <Title color={'#ffffff'} text={props.title}/>
            </TitleWrapper>
            <EventDaysList {...props}/>
            <Schedule {...props} />
        </AgendaWrapper>
    );
};

AgendaBlock.propTypes = {
    agendaProps: PropTypes.shape({
        title: PropTypes.string.isRequired,
        eventDays: PropTypes.arrayOf(
            PropTypes.string.isRequired,
        ).isRequired,
        eventSchedule: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                startTime: PropTypes.string.isRequired,
                endTime: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                speakerRole: PropTypes.string.isRequired,
                theme: PropTypes.string.isRequired,
            }).isRequired,
        ).isRequired,
    }).isRequired,
};

export default AgendaBlock;
