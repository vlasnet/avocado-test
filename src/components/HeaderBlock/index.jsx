import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import bground from './assets/anders-jilden-89745.png';
import Button from "components/Common/Button";
import {media} from 'components/Common/media';

const HeaderWrapper = styled.div`
    box-sizing: border-box;
    max-width: 100%;
    min-height: 680px;
    padding-right: 6.153846153846154%;
    text-align: right;
    ${media.desktop`background: url(${bground}) #00aeda no-repeat 0 100%;`}
    ${media.tablet`background: #00aeda;`}
    ${media.phone`background: #00aeda;`}
`;

const ButtonWrapper = styled.div`
    margin: 0 0 0 auto;
    display: flex;
    justify-content: space-between;
    ${media.desktop`width: 456px;`}
    ${media.tablet`width: 420px;`}
    ${media.phone`width: 280px;`}
`;

const EventDates = styled.div`
    
    line-height: 62px;
    color: #0f71a1;
    font-family: 'Abril Fatface', cursive;
    font-size: 80px;
    ${media.desktop`padding-top: 155px;`}
    ${media.tablet`padding-top: 95px;`}
    ${media.phone`padding-top: 95px;`}
    &:after {
    display: block;
    content: "";
    width: 53px;
    height: 3px;
    margin-left: auto;
    margin-top: 30px;
    margin-bottom: 20px;
    background-color: #ffffff;
  }
`;

const EventPlace = styled.div`
    margin-bottom: 95px;
    line-height: 31px;
    color: #d8f2ff;
    font-family: 'Raleway', sans-serif;
    font-style: italic;
    font-size: 28px;
`;

const theme = {
    fg: '#ffffff',
    bg: 'transparent',
    bc: '#ffffff'
};

const invertTheme = {
    fg: '#00aeda',
    bg: '#ffffff',
    bc: '#00aeda'
};

const HeaderBlock = (prop) => {
    const props = prop.headerProps;
    return (
        <HeaderWrapper>
            <EventDates>{props.eventDates}</EventDates>
            <EventPlace>{props.eventPlace}</EventPlace>
            <ButtonWrapper>
                <Button theme={invertTheme} name="Register" width="200px"/>
                <Button theme={theme} name="Buy online" width="200px"/>
            </ButtonWrapper>
        </HeaderWrapper>
    );
};

HeaderBlock.propTypes = {
    headerProps: PropTypes.shape({
        menuItems: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        eventDates: PropTypes.string.isRequired,
        eventPlace: PropTypes.string.isRequired,
    }).isRequired
};

export default HeaderBlock;
