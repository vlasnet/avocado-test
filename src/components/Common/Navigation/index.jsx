import React from 'react';
import {NavLink} from 'react-router-dom';
import './styled.css';
import styled from "styled-components";
import {media} from 'components/Common/media';

const Navbar = styled.div`
max-width: 100%;
    min-height: 70px;
    padding-top: 42px;    
    padding-left: 6.153846153846154%;
    padding-right: 6.153846153846154%;
    display: flex;
    justify-content: space-between;
    ${media.desktop`background: linear-gradient(to right, #3fbbdf 40%, #00b2db 50%, #00aeda 60%);`}
    ${media.tablet`background: #00aeda;`}
    ${media.phone}
`;

const MenuWrapper = styled.ul`
    margin: 0;
    padding: 0;
    padding-top: 9px;
    display: flex;
    list-style: none;
    ${media.desktop`;`}
    ${media.tablet`flex-direction: column;`}
    ${media.phone`;`}
`;

const Logo = styled.a`
    display: block;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: #ffffff;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 30px;
    vertical-align: top;
    line-height: 32px;
`;

const Span = styled.span`
    color: #ffffff;
    font-family: 'Abril Fatface', cursive;
    font-size: 35px;
`;

const Navigation = ({isLoggedIn}) => (
    <Navbar>
        <NavLink
            to="/"
            className="nav-link">
            <Logo href="/">Spring<Span>UI</Span></Logo>
        </NavLink>

        <MenuWrapper>
            <li>
                <NavLink
                    to="/idea"
                    className="nav-link"
                    activeClassName="nav-link-active">
                    Idea
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/speakers"
                    className="nav-link"
                    activeClassName="nav-link-active">
                    Speakers
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/agenda"
                    className="nav-link"
                    activeClassName="nav-link-active">
                    Agenda
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/price"
                    className="nav-link"
                    activeClassName="nav-link-active">
                    Price
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/registration"
                    className="nav-link"
                    activeClassName="nav-link-active">
                    Registration
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className="nav-link"
                    activeClassName="nav-link-active">
                    Contact
                </NavLink>
            </li>
        </MenuWrapper>
    </Navbar>
);

export default Navigation;
