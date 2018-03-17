import React from 'react';
import styled from 'styled-components';
import {media} from 'components/Common/media';

const TitleText = styled.h1`
    margin: 0;
    margin-left: 30px;
    color: ${props => props.color ? props.color : 'white'};
    font-family: 'Abril Fatface', cursive;
    word-wrap: break-word;
    ${media.desktop`font-size: 60px;`}
    ${media.tablet`font-size: 60px;`}
    ${media.phone`font-size: 45px;`}
`;

const Title = ({color, text}) => {

    return (
        <TitleText color={color}>{text}</TitleText>
    );
};

Title.propTypes = {};

export default Title;
