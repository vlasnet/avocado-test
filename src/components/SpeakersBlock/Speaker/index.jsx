import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import jess_norton from '../assets/jess_norton.png';
import nick_tomson from '../assets/nick_tomson.png';
import daniel_rickardo from '../assets/daniel_rickardo.png';
import laura_la_benja from '../assets/laura_la_benja.png';
import {media} from 'components/Common/media';

const SpeakerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    min-height: 270px;
    ${media.desktop`width: 24%;`}
    ${media.tablet`width: 31%;`}
    ${media.phone`width: 48%;`}
    
  &:after {
    display: block;  
    position: absolute;
    left: 46%;
    content: "";
    box-sizing: border-box;
    width: 5px;
    height: 5px;
    border-radius: 2.5px;
    background-color: #56aed6;
    box-shadow: 30px 0 0 0 #56aed6;
    
    ${media.desktop`top: 98%;`}
    ${media.tablet`top: 92%;`}
    ${media.phone`top: 92%;`}
  }
  
  &:before {  
    display: block;    
    position: absolute;
    left: 46%;
    content: "";
    width: 30px;
    height: 1px;
    background-color: #56aed6;
    
    ${media.desktop`top: 99%;`}
    ${media.tablet`top: 93%;`}
    ${media.phone`top: 93%;`}
  }
`;

const Ava = styled.img`
    display: block;
    width: 170px;
    height: 170px;
    ${media.desktop`
        width: 170px;
        height: 170px;
    `}
    ${media.tablet`
        width: 130px;
        height: 130px;
    `}
    ${media.phone`
        width: 130px;
        height: 130px;
    `}
`;

const Name = styled.p`
    margin-top: 20px;
    margin-bottom: 15px;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 22px;
    text-align: center;
    color: #56aed6;
`;

const Role = styled.p`
    margin-top: 0;
    font-family: 'Taviraj', serif;
    font-style: italic;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
    color: #89969c;
`;

const Speaker = ({speakerIcon, speakerName, speakerRole}) => {
    let source = speakerIcon === '../assets/jess_norton.png' ? jess_norton :
        speakerIcon === '../assets/nick_tomson.png' ? nick_tomson :
            speakerIcon === '../assets/daniel_rickardo.png' ? daniel_rickardo : laura_la_benja;
    return (
        <SpeakerWrapper>
            <Ava src={source} alt="speaker"/>
            <Name>{speakerName}</Name>
            <Role>{speakerRole}</Role>
        </SpeakerWrapper>
    );
};

Speaker.propTypes = {
    speakerIcon: PropTypes.string.isRequired,
    speakerName: PropTypes.string.isRequired,
    speakerRole: PropTypes.string.isRequired,
};

export default Speaker;
