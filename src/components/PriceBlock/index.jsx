import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import icon from './assets/price-tag.png';
import Icon from 'components/Common/Icon';
import Title from 'components/Common/Title';
import ProductCard from './ProductCard';
import {media} from 'components/Common/media';

const PriceWrapper = styled.div`
    box-sizing: border-box;
    max-width: 100%;
    min-height: 919px;
    padding-top: 90px;
    padding-bottom: 140px;
`;

const TitleWrapper = styled.div`
    display: flex;    
    justify-content: center;
    max-width: 15.5%;
    margin: 0 auto;
    margin-bottom: 80px;
    line-height: 50px; 
`;

const ContentWrapper = styled.div`
    max-width: 88%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${media.tablet`flex-direction: column;`}
    ${media.phone`flex-direction: column;`}
     > * {
        &:nth-child(2n) {            
            background-color: #56aed6;
        } 
    }
`;

const theme = {
    fg: '#ffffff',
    bg: '#56aed6',
    bc: '#ffffff',
    tc: '#56aed6',
    pc: '#2682ac',
    oc: '#2682ac'
};

const invertTheme = {
    fg: '#56aed6',
    bg: '#ffffff',
    bc: '#56aed6',
    tc: '#ffffff',
    pc: '#0e5372',
    oc: '#0e5372'
};

const PriceBlock = (prop) => {
    const props = prop.priceProps;
    const cards = props.productCards;
    return (
        <PriceWrapper>
            <TitleWrapper>
                <Icon image={icon} width="28" height="50" />
                <Title color={'#56aed6'} text={props.title} />
            </TitleWrapper>
            <ContentWrapper>
                {cards.map((card, i) => {
                    let cardTheme = i%2===0 ? theme : invertTheme;
                    return <ProductCard key={card.id}{...card} theme={cardTheme}/>
                })}
            </ContentWrapper>

        </PriceWrapper>
    );
};

PriceBlock.propTypes = {
    priceProps: PropTypes.shape({
        title: PropTypes.string.isRequired,
        productCards: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                background: PropTypes.string.isRequired,
                productTitle: PropTypes.string.isRequired,
                productPrice: PropTypes.string.isRequired,
                offerTerm: PropTypes.string.isRequired,
                button: PropTypes.string.isRequired,
            }).isRequired,
        ).isRequired,
    }).isRequired,
};

export default PriceBlock;
