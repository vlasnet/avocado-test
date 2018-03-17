import React from 'react';
import styled from 'styled-components';
import Speaker from "../Speaker";

const List = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: space-between;
    flex-wrap: wrap;
    max-width: 87.5%;
    min-height: 928px;
    margin: 0 auto;
    margin-top: 94px;
`;

const SpeakersList = props => {
    let speakers = props.speakers;
    return (
        <List>
            {speakers.map(speaker => (
                <Speaker key={speaker.id}{...speaker} />
            ))
            }
        </List>
    );
};

export default SpeakersList;
