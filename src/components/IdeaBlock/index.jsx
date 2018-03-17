import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Common/Title';
import Icon from 'components/Common/Icon';
import Button from "components/Common/Button";
import styled from 'styled-components';
import bground from './assets/maxresdefault.png';
import icon from './assets/light-bulb.png'
import {media} from 'components/Common/media';

const IdeaWrapper = styled.div`
    box-sizing: border-box;
    max-width: 100%;
    min-height: 522px;
    padding-top: 90px;
    padding-bottom: 131px;
`;

const Content = styled.p`
    margin: 0 auto;
    color: #aebdc4;
    font-size: 26px;
    font-family: 'Raleway', sans-serif;
    text-align: justify;
    line-height: 45px; 
    ${media.desktop`max-width: 50.23%;`}
    ${media.tablet`max-width: 70%;`}
    ${media.phone`max-width: 90%;`}
`;

const TitleWrapper = styled.div`
    display: flex;
    width: 50.23%;
    margin: 0 auto;
    margin-bottom: 38px;
    line-height: 50px; 
`;

const SellingWrapper = styled.div`
    box-sizing: border-box;
    max-width: 100%;
    min-height: 609px;    
    padding-left: 6.153846153846154%;
    text-align: left;
    ${media.desktop`background: url(${bground}) #9accdc no-repeat 100% 100%;
                    padding-top: 130px;`}
    ${media.tablet`background: #9accdc;
                   padding-top: 80px;`}
    ${media.phone`background: #9accdc;
                  padding-top: 50px;`}
     > * {
        &:first-child {
            margin-left: 0;
        } 
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    ${media.desktop`width: 456px;`}
    ${media.tablet`width: 420px;`}
    ${media.phone`width: 280px;`}
`;

const  SellingContent = styled.p`
    color: #477c93;
    font-size: 26px;
    font-family: 'Raleway', sans-serif;
    text-align: justify;
    line-height: 45px; 
    ${media.desktop`max-width: 43%;`}
    ${media.tablet`max-width: 90%;`}
    ${media.phone`max-width: 90%;`}
`;

const theme = {
    fg: '#ffffff',
    bg: 'transparent',
    bc: '#ffffff'
};

const invertTheme = {
    fg: '#00aeda',
    bg: '#ffffff',
    bc: '#ffffff'
};


const IdeaBlock = prop => {
    const props = prop.ideaProps;
    const sellingProps = prop.sellingProps;
    let content = sellingProps.contentText;
    function unsafeInsertion() {
        return {__html: content};
    }
    return (
        <Fragment>
            <IdeaWrapper>
                <TitleWrapper>
                    <Icon image={icon} width="33" height="47"/>
                    <Title color={'#00aeda'} text={props.title}/>
                </TitleWrapper>
                <Content>{props.contentText}</Content>
            </IdeaWrapper>
            <SellingWrapper>
                <Title color={'#ffffff'} text={sellingProps.title}> </Title>
                <SellingContent dangerouslySetInnerHTML={unsafeInsertion()} />
                <ButtonWrapper>
                    <Button theme={invertTheme} name="Register" width="200px"/>
                    <Button theme={theme} name="Buy online" width="200px"/>
                </ButtonWrapper>
            </SellingWrapper>
        </Fragment>
    );
};

IdeaBlock.propTypes = {
    ideaProps: PropTypes.shape({
        title: PropTypes.string.isRequired,
        contentText: PropTypes.string.isRequired,
    }).isRequired,
    sellingProps: PropTypes.shape({
        title: PropTypes.string.isRequired,
        contentText: PropTypes.string.isRequired,
    }).isRequired,
};

export default IdeaBlock;
