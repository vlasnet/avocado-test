import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Common/Button';
import styled, {ThemeProvider} from 'styled-components';
import snowdrop from '../assets/snowdrop.png';
import tulipesblanches from '../assets/tulipesblanches.png';
import late_flower from '../assets/late_flower.png';
import {media} from 'components/Common/media';

const CardWrapper = styled.div`
    background-color: #eef6fa;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    ${media.desktop`    
    width: 359px;
    min-height: 563px;
    `}
    ${media.tablet`    
    width: 80%;
    min-height: 400px;
    `}
    ${media.phone`    
    width: 80%;
    min-height: 400px;
    `}
`;

const ButtonWrapper = styled.div`
    margin: 45px auto;
`;

const ProductImage = styled.img`
    margin: auto;  
    ${media.desktop`display: block;`}
    ${media.tablet`display: none;`}
    ${media.phone`display: none;`}
`;

const ProductTitle = styled.div`
    margin: 0 auto;    
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    font-weight: 500;
    line-height: 30px;
    color: ${props => props.theme.tc};
`;

const ProductPrice = styled.div`
    margin: 24px auto 0;      
    font-family: 'Taviraj', serif;
    font-size: 60px;
    font-weight: 600;
    line-height: 60px;
    color: ${props => props.theme.pc};
`;

const OfferTerm = styled.div`
    margin: 24px auto 0;    
    font-family: 'Taviraj', serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 20px;
    color: ${props => props.theme.oc};
`;

const PropductCard = ({background, productTitle, productPrice, offerTerm, theme}) => {
    let source = background === '../assets/snowdrop.png' ? snowdrop :
        background === '../assets/tulipesblanches.png' ? tulipesblanches : late_flower;
    return (
        <CardWrapper>
            <ProductImage src={source} />
            <ThemeProvider theme={theme}>
                <ProductTitle>{productTitle}</ProductTitle>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <ProductPrice>{productPrice}</ProductPrice>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <OfferTerm>{offerTerm}</OfferTerm>
            </ThemeProvider>
            <ButtonWrapper>
                <Button theme={theme} name="Buy"/>
            </ButtonWrapper>
        </CardWrapper>
    );
};

PropductCard.propTypes = {
    background: PropTypes.string.isRequired,
    productTitle: PropTypes.string.isRequired,
    productPrice: PropTypes.string.isRequired,
    offerTerm: PropTypes.string.isRequired,
    theme: PropTypes.shape({
        fg: PropTypes.string.isRequired,
        bg: PropTypes.string.isRequired,
        bc: PropTypes.string.isRequired,
        tc: PropTypes.string.isRequired,
        pc: PropTypes.string.isRequired,
        oc: PropTypes.string.isRequired,
    }).isRequired,
};

export default PropductCard;
