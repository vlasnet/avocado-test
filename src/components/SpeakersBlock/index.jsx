import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from 'components/Common/Title';
import Icon from 'components/Common/Icon';
import icon from './assets/megaphone.png'
import SpeakersList from "./SpeakersList";

const SpeakersWrapper = styled.div`
    box-sizing: border-box;
    max-width: 100%;
    min-height: 1275px;
    padding-top: 88px;
    padding-bottom: 94px;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 50.23%;
    margin: 0 auto;
    line-height: 68px; 
`;

const SpeakersBlock = (prop) => {
    const props = prop.speakersProps;
    return (
        <SpeakersWrapper>
            <TitleWrapper>
                <Icon image={icon} width="53px" height="48px" />
                <Title color={'#0f71a1'} text={props.title} />
            </TitleWrapper>
            <SpeakersList {...props}/>
        </SpeakersWrapper>
    );
};

SpeakersBlock.propTypes = {
    speakersProps: PropTypes.shape({
        title: PropTypes.string.isRequired,
        speakers: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                speakerIcon: PropTypes.string.isRequired,
                speakerName: PropTypes.string.isRequired,
                speakerRole: PropTypes.string.isRequired,
            }).isRequired,
        ).isRequired,
    }).isRequired,
};

export default SpeakersBlock;
