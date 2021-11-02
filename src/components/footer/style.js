import styled from "styled-components";

export const Footer =styled.footer`
    width: 100%;
    padding-top:15vh;
    background-color: #fff;
`
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70vh;
    background-color: #292828;
   
    @media (max-width: 992px) {
        height: 80vh;
    }
    @media (max-width: 592px) {
        height: auto;
        justify-content: flex-start;
        padding-left: 15px;
        padding-top: 6em;
       
    }


`

export const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 70%;
    @media (max-width: 992px) {
        flex-wrap: wrap;
    }
    @media (max-width: 592px) {
        flex-direction: column;
        
    }
    
`

export const Title = styled.div`
    font-size: 1.6em;
    margin-bottom: 1em;
    color: #fff;
    font-weight: bold;
    width: 170px;
`

export const Adress = styled.div`
    display: flex;
    flex-direction: column;
    width: 27%;
    background-color: #292828;
    font-size: 1em;
    color: #fff;
    margin-right: 1.5em;
    @media (max-width: 992px) {
        padding: 0em 0em 0em 0em;
        margin-right: 0em;
        width: 50%;
        margin-bottom: 4em;
    }
    @media (max-width: 592px) {
        margin-bottom: 2em;
        
    }
`
export const Paragraph = styled.div`
    width: 200px;
    font-weight: lighter;
    @media (max-width: 992px) {
        width: 270px;
    }
    @media (max-width: 768px) {
        width: 200px;
    }
    @media (max-width: 592px) {
        width: 290px;
        letter-spacing: 0.5px;
        
    }
`

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    font-size: 1em;
    list-style: none;
    background-color: #292828;
    @media (max-width: 992px) {
        padding: 0em 0em 0em 0em;
        width: 50%;
    }
    @media (max-width: 592px) {
        margin-bottom: 2em;
    }
`

export const Follow = styled.div`
    display: flex;
    flex-direction: column;
    list-style: none;
    background-color: #292828;
    width: 25%;
    @media (max-width: 992px) {
        padding: 0em 0em 0em 0em;
        width: 50%;
    }
    @media (max-width: 592px) {
        margin-bottom: 2em;
    }
`

export const News = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #292828;
    width: 25%;
    @media (max-width: 992px) {
        width: 50%;
        padding: 0em 0em 0em 0em;
    }
`

export const Item = styled.li`
    font-size: 1em;
    color: #fff;
    margin-bottom: 0.8em;
    cursor: pointer;
    &:hover {
        color: #f8ca11;
        transition: all 0.3s ease 0s;
        animation: 5s ease 0s 1 normal none running fdBcwW;
    } 
`

export const Itemsocial = styled.li`
    font-size: 1em;
    color: #fff;
    margin-bottom: 0.5em;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        color: #f8ca11;
        transition: all 0.3s ease 0s;
        animation: 5s ease 0s 1 normal none running fdBcwW;
    } 
`

export const a = styled.a`
    cursor: pointer;
`

export const icon = styled.img`
    margin-right: 0.5em;
    cursor: pointer;
`

export const input = styled.input`
    width: 120%;
    height: 3.5em;
    border-radius: 0.5em;
    padding: 0.5em;
    margin-top: 0.4em;
    outline: none;
    border: none;
    @media (max-width: 992px) {
        width: 100%; 
    }
    @media (max-width: 592px) {
        width: 250%;
    }
`

export const Button = styled.div`
    width: 153px;
    border: 0;
    color: #fff;
    background-color: #FECF3D;
    text-align: center;
    padding: 0.7em 0.3em 0.7em 0.3em;
    font-size: 1.1em;
    font-weight: 600;
    margin-top: 1.6em;
    margin-bottom: 1.6em;
    border-radius: 0.3em;
    cursor: pointer;
`
export const CopyrightBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 1em;
    background-color: #fff;
`

export const Copyright = styled.div`
    font-size: 1.2em;
    font-weight: 100;
    opacity: 0.9;
    @media (max-width: 592px) {
        width: 100%;
        font-size: 1em;
        text-align: center;
    }
`