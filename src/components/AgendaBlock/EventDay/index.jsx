import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {media} from 'components/Common/media';

const Day = styled.a`    
    color: #437f98;
    font-size: 26px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    text-decoration: none;
    padding-bottom: 8px;
    border-bottom: 4px solid transparent;
    ${media.desktop`margin: 70px 60px 110px 0;`}
    ${media.tablet`margin: 70px 40px 110px 0;`}
    ${media.phone`margin: 70px 20px 110px 0;`}
    
  &:hover,
   :active{
    color: #00415e;
    padding-bottom: 8px;
    border-bottom: 4px solid #00415e;
  }
`;

const EventDay = ({day}) => {
    return (
        <Day href="#">{day}</Day>
    );
};

EventDay.propTypes = {
    day: PropTypes.string.isRequired,
};

export default EventDay;
