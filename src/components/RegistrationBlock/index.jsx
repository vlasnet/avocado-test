import React from 'react';
import styled from 'styled-components';
import icon from './assets/edit.png';
import Icon from 'components/Common/Icon';
import Title from 'components/Common/Title';
import Button from 'components/Common/Button';
import PropTypes from "prop-types";

const RegWrapper = styled.div`
    max-width: 100%;
    min-height: 702px;
    margin: 0;
    padding-top: 90px;
    padding-bottom: 117px;
    box-sizing: border-box;
    background-color: #66bde5;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    max-width: 32.3%;
    margin: 0 auto;
    margin-bottom: 93px;
    line-height: 50px; 
    vertical-align: top;
`;

const ContentWrapper = styled.div`
    width: 53%;
    min-height: 355px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    min-height: 63px;
    border: 1px solid #ffffff;
    border-radius: 31.5px;
    background-color: transparent;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    color: #ffffff;
`;

const ButtonWrapper = styled.div`
    margin: 0 auto;
`;

const theme = {
    fg: '#56aed6',
    bg: '#ffffff',
    bc: 'transparent'
};

const RegistrationBlock = (prop) => {
    const props = prop.registrationProps;
    const inputFields = props.inputFields;
    return (
        <RegWrapper>
            <TitleWrapper>
                <Icon image={icon} width="49" height="48"/>
                <Title color={'#ffffff'} text={props.title}/>
            </TitleWrapper>
            <ContentWrapper>
                {inputFields.map(item => (
                    <Input type="text" key={item} placeholder={item} required/>
                ))}
                <ButtonWrapper>
                    <Button theme={theme} name="Send" width="160px"/>
                </ButtonWrapper>
            </ContentWrapper>
        </RegWrapper>
    );
};

RegistrationBlock.propTypes = {
    registrationProps: PropTypes.shape({
        title: PropTypes.string.isRequired,
        inputFields: PropTypes.arrayOf(
            PropTypes.string.isRequired,
        ).isRequired,
    }).isRequired,
};

export default RegistrationBlock;
