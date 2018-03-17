import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import icon from './assets/pin.svg'
import twitter from './assets/twitter.png'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import Icon from 'components/Common/Icon';

const FooterWrapper = styled.div`
    max-width: 100%;
    min-height: 207px;
    margin: 0;
    padding-top: 54px;
    padding-bottom: 54px;
    box-sizing: border-box;
    background-color: #56aed6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ContentWrapper = styled.div`
    width: 332px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    line-height: 22px;
    font-family: 'Raleway', sans-serif;
    font-size: 22px;
    color: #ffffff;
`;

const SocialsWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    width: 150px;
    justify-content: space-between;
`;

const SocialIcon = styled.a`
    display: block;
    margin: auto 0;
    width: ${props => props.width};
    height: ${props => props.height};
    background: url(${props=>props.image}) no-repeat;
`;

const FooterBlock = (prop) => {
    const props = prop.footerProps;
    return (
        <FooterWrapper>
            <ContentWrapper>
                <Icon  image={icon} width="15px" height="22px" />
                <p>{props.address}</p>
            </ContentWrapper>
            <SocialsWrapper>
                <SocialIcon href="https://www.facebook.com/" image={facebook} width="21px" height="43px" />
                <SocialIcon href="https://www.instagram.com" image={instagram} width="37px" height="37px" />
                <SocialIcon href="https://twitter.com" image={twitter} width="41px" height="32px" />
            </SocialsWrapper>
        </FooterWrapper>
    );
};

FooterBlock.propTypes = {
    footerProps: PropTypes.shape({
        address: PropTypes.string.isRequired,
    }).isRequired
};

export default FooterBlock;
