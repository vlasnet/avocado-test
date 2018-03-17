import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    display: block;
    margin: auto 0;
    width: ${props => props.width};
    height: ${props => props.height};
`;

const Icon = ({image, width, height}) => {
    return (
            <Image src={image} alt="icon" width={width} height={height} />
    );
};

Icon.propTypes = {};

export default Icon;
