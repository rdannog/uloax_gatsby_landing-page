import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    background-color: #1a1a1a;
    
`
export const Nav = styled.div`
    height:15vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    padding: 1%;
    height: auto;
    position: fixed;
    z-index: 99999;
    background-color: #1a1a1a;
    @media (max-width: 992px) {
        justify-content: flex-start;
        padding: 2%;
    }
`
export const NavLogo = styled.img`
    width: 15vw;
    @media (max-width: 992px) {
        width: 200px;
        margin-left: 30px;
    }
`
export const List = styled.div`
    width:50vw;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 992px) {
        display: none;
    }
`

export const Items = styled.a`
    cursor: pointer;
    font-size: 1.3vw;
    color: #fff;
    border:0;
    text-decoration: none;
    &:hover {
        color: #f8ca11;
        transition: all 0.3s ease 0s;
        animation: 5s ease 0s 1 normal none running fdBcwW;
    } 
`
export const HeaderSlides = styled.section`
    width:98%;
    padding-top: 15vh;
    
`
export const Slide = styled.div`
    width:100%;
    height:80vh;
`
export const BookContact = styled.span`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items:end;
    @media (max-width: 425px) {
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:start;
        align-items:center;
    }
`
export const ContactContainer = styled.div`
    width: 65%;
    background-color: #f8ca11;
    text-align: center;
    font-size: 2vw;
    padding:1vh 1vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 768px) {
        width:85%;
        align-self:center;
        padding:7vh 0;
        font-size: 3vw;
    }
`
export const BookTitle = styled.h2`
    font-weight:400;
    color: #fff;
`
export const Phone = styled.h2`
    font-weight:400;
`

export const TaxiImg = styled.img`
    margin-top:10vh;
    width:40vw;
    @media (max-width: 768px) {
        width:95%;
        margin-top:5vh;
    }
`
export const BookingForm = styled.span`
    width:50%;
    position:relative;
    bottom:100%;
    left:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:start;
    @media (max-width: 425px) {
        display: none;
    }
`
export const FormTitle = styled.h2`
    height:10vh;
    color: #fff;
    font-weight:400;
    margin-bottom:2vh;
    display:flex;
    align-items:center;
    justify-content:center;
    @media (max-width: 768px) {
        height:15vh;
        font-size: 2.2vw;
    }
`
export const Form = styled.form`
    width:90%;
    height:60%;
    font-weight:400;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    background-color: #fff;
`
export const FormText = styled.h2`
    font-weight:400;
    font-size:2vw;
    padding:2vh 1vw;
    margin:1vh 0;
`
export const FormInput = styled.input`
    width:90%;
    height:7vh;
    margin:1vh 0;
    background-color: #e1e1e1;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    &::placeholder{
        font-size:1.3vw;
        font-weight:400;
        color: #000;
        padding-left:1vw;
    }
`

export const SearchBtn = styled.button`
    width:10vw;
    height:9vh;
    font-size:1.2vw;
    font-weight:400;
    align-self:end;
    margin:2vh 2.5vw 4vh 0;
    border: 1px solid #353433;
    border-radius: 10px;
    background-color: #353433;
    color: #fff;
    cursor: pointer;
    &:hover {
        background-color: #f8ca11;
        color: #353433;
        border: 1px solid #f8ca11;
    }

`