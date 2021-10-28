import styled from "styled-components";

export const HeaderContainer = styled.div`
    
`
export const Nav = styled.div`
    height:15vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const NavLogo = styled.img`
    width: 15vw;
`
export const NavList = styled.div`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
`
export const List = styled.div`
   display:flex;
`
export const Items = styled.div`
    font-size: 1.5rem; 
    color: #fff; 
`
export const HeaderSlides = styled.section`
    width:100%;
`
export const Slide = styled.section`
    width:100%;
    height:100%;
    display:flex;
`
export const BookContact = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:end;
`
export const ContactContainer = styled.div`
    width: 35vw;
    height: 22vh;
    background-color: #f8ca11;
    text-align: center;
    font-size: 2vw;
    padding:1vh 1vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
export const BookTitle = styled.h2`
    font-weight:400;
    color: #fff;
`
export const Phone = styled.h2`
    font-weight:400;
`
export const Taxi = styled.div`
`
export const TaxiImg = styled.img`
    margin-top:4vh;    
    width:40vw;
`
export const BookingForm = styled.section`
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:start;
`
export const FormTitle = styled.h2`
    height:10vh;
    color: #fff;
    font-weight:400;
    margin-bottom:2vh;
    display:flex;
    align-items:center;
    justify-content:center;
`
export const Form = styled.form`
    width:90%;
    height:55%;
    font-weight:400;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    background-color: #fff;
`
export const FormText = styled.h2`
    font-weight:400;
    padding:1vh 1vw;
`
export const FormInput = styled.input`
    width:90%;
    height:7vh;
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
export const FormButton = styled.button`
    font-weight:400;
    align-self:end;
    margin-right:2.5vw;
`