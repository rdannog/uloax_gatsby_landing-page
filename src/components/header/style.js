import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    background-color: #1a1a1a;
`

export const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    padding: 1%;
    height: auto;
    position: fixed;
    z-index: 99999;
    background-color: #1a1a1a;
`
export const NavLogo = styled.img`
    width: 13%;

`
export const NavList = styled.div`
    width: ;
    list-style: none;
`
export const List = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 40%;
    
`
export const Items = styled.a`
    cursor: pointer;
    font-size: 1.1em;
    color: #fff;
    background-color: transparent;
    border:0;
    text-decoration: none;
    &:hover {
        color: #f8ca11;
        transition: all 0.3s ease 0s;
        animation: 5s ease 0s 1 normal none running fdBcwW;
    } 
`
