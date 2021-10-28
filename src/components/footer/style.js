import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 50vh;
    background-color: #1a1a1a;
    padding:0em 10em 0em 10em;
`
export const Title = styled.div`
    font-size: 2em;
    margin-bottom: 1em;
    color: #fff;
    font-weight: bold;
`

export const Adress = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    background-color: #1a1a1a;
    font-size: 1em;
    color: #fff;
    margin-top: 0.4em;
`
export const Paragraph = styled.div`
    width: 75%;
`

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    font-size: 1em;
    list-style: none;
    background-color: #1a1a1a;
`

export const Follow = styled.div`
    display: flex;
    flex-direction: column;
    list-style: none;
    background-color: #1a1a1a;
    width: 20%;
`

export const News = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1a1a1a;
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
    width: 140%;
    height: 3.5em;
    border-radius: 0.5em;
    padding: 0.5em;
    margin-top: 0.4em;
    outline: none;
    border: none;
`

export const Button = styled.div`
    width: 80%;
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
    
`

export const Copyright = styled.div`
    font-size: 1.2em;
    font-weight: 100;
    opacity: 0.9;
`