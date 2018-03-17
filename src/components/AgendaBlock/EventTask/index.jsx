import React from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import {media} from 'components/Common/media';

const move = keyframes`  
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Event = styled.div`
    display: flex;
    max-width: 100%;
    min-height: 115px;
    margin: 0;
    margin-bottom: 70px;  
    animation: ${move} 1s;
`;

const EventTime = styled.div`
    max-width: 61px;
    min-height: 115px;
    margin: 0;
    padding: 0;
    margin-right: 88px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`;

const EventInfo = styled.div`
    margin: 0;
    padding: 0;
    min-height: 115px;
    display: flex;    
    flex-direction: column;
`;

const Time = styled.p`
    margin: 0;
    padding: 0;
    color: #ffffff;
    font-family: 'Taviraj', serif;
    font-weight: 600;
    ${media.desktop`
        font-size: 22px;
        line-height: 22px;
    `}
    ${media.tablet`
        font-size: 20px;
        line-height: 20px;
    `}
    ${media.phone`
        font-size: 18px;
        line-height: 18px;
    `}
    
    &:after {
    display: block;  
    position: absolute;
    top: 0;
    left: 169%;
    content: "";
    box-sizing: border-box;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    border: 2px solid #0074aa;
    box-shadow: 0 95px 0 0 #0074aa;
  }
  
  &:before {  
    display: block;    
    position: absolute;
    top: 11%;
    left: 180%;
    content: "";
    width: 1px;
    height: 85px;
    background-color: #0074aa;
  }
`;

const Header = styled.h1`    
    margin: 0;
    padding: 0;
    color: #0074aa;
    font-family: 'Taviraj', serif;
    font-weight: 500;
    text-transform: uppercase;
    ${media.desktop`
        margin-bottom: 12px;
        font-size: 26px;
        line-height: 26px;
    `}
    ${media.tablet`
        margin-bottom: 10px;
        font-size: 24px;
        line-height: 24px;
    `}
    ${media.phone`
        margin-bottom: 8px;
        font-size: 22px;
        line-height: 22px;
    `}
`;

const Role = styled.p`
    margin: 0;
    padding: 0;
    color: #7b909a;    
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    ${media.desktop`
        margin-bottom: 36px;
        font-size: 18px;
        line-height: 18px;
    `}
    ${media.tablet`
        margin-bottom: 24px;
        font-size: 16px;
        line-height: 16px;
    `}
    ${media.phone`
        margin-bottom: 12px;
        font-size: 14px;
        line-height: 14px;
    `}
`;

const Theme = styled.p`
    margin: 0;
    padding: 0;
    color: #0067d0;
    font-family: 'Taviraj', serif;
    font-weight: 500;
    font-style: italic;
    ${media.desktop`
        font-size: 22px;
        line-height: 22px;
    `}
    ${media.tablet`
        font-size: 20px;
        line-height: 20px;
    `}
    ${media.phone`
        font-size: 18px;
        line-height: 18px;
    `}
`;

const EventTask = props => {
    return (
        <Event>
            <EventTime>
                <Time>{props.startTime}</Time>
                <Time>{props.endTime}</Time>
            </EventTime>
            <EventInfo>
                <Header>{props.title}</Header>
                <Role>{props.speakerRole}</Role>
                <Theme>{props.theme}</Theme>
            </EventInfo>
        </Event>
    );
};

EventTask.propTypes = {
        id: PropTypes.string.isRequired,
        startTime: PropTypes.string.isRequired,
        endTime: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        speakerRole: PropTypes.string.isRequired,
        theme: PropTypes.string.isRequired,
};

export default EventTask;
