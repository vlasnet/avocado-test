import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import PropTypes from 'prop-types';

const Btn = styled.button`
  color: ${props => props.theme.fg};
  border: 1px solid ${props => props.theme.bc};
  background: ${props => props.theme.bg};
  width: ${props => props.width};
  height: 60px;
  border-radius: 30px;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
`;

const Button = ({theme, name, width}) => {
    return (
        <ThemeProvider theme={theme}>
            <Btn width={width}>{name}</Btn>
        </ThemeProvider>
    );
};

Button.propTypes = {
    theme: PropTypes.shape().isRequired,
    name: PropTypes.string.isRequired,
    width: PropTypes.string
};

Button.defaultProps = {
    width: '150px'
}
export default Button;
