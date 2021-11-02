import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(#f5f5f5, #fff);
    
`

export const SectionOurTaxi = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: #161c1e;
    margin-top: 4em;
    padding-bottom: 3em;
`

export const BoxTitle = styled.div`
    display: flex;
    justify-content: center;
    margin: 6em 0em 4em 0em;
`

export const Title = styled.h2`
    font-size: 3em;
    color: #fff;

`

export const BoxCarsRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0em 6em;
    @media (max-width: 992px) {
        padding: 0em 3em;
    }
    @media (max-width: 576px) {
        flex-direction: column;
        justify-content: center;
        padding: 0em 1em;
    }
`

export const Car = styled.div`
    display: flex;
    width: 25vw;
    height: auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #fff;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
    @media (max-width: 576px) {
        width: 100%;
        margin-bottom: 4em;

    }
`

export const round = styled.div`
    position: relative;
    bottom: 8%;
    background: #f8ca11;
    width: 3.1em;
    padding: 1em;
    border-radius: 60px;
    color: #fff;
    font-size: 1.5em;
    @media (max-width: 992px) {
        width: 2.6em;
        padding: 0.7em;
        border-radius: 60px;
        bottom: 6%;
    }
`
export const CarTitle = styled.h3`
    font-size: 1.5em;
    font-weight: 200;
    margin: 1em 0em 1em 0em;
    opacity: 0.9;
    @media (max-width: 768px) {
        margin: 0em 0em 1em 0em;
    }
    @media (max-width: 576px) {
        margin: 1em 0em 1em 0em;
    }
`

export const CarParagraph = styled.p`
    font-size: 1.2em;
    width: 100%;
    padding: 0em 2.5em 0em 2.5em;
    opacity: 0.7;
    @media (max-width: 768px) {
        font-size: 1em;
        padding: 0em 1em 0em 1em;
    }
    @media (max-width: 576px) {
        font-size: 1.2em;
        width: 220px;
    }

`

export const img = styled.img`
    width: 100%;
    padding: 1em;
    @media (max-width: 576px) {
        width: 380px;
        padding: 1em 3em 0em 3em;
    }
`
export const RideContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const RideTitle = styled.h2`
    width:100%;
    height:50vh;
    text-align:center;
    display: flex;
    justify-content: center;
    align-items:center;
    h2{
        width: 40%;
        color:#2b3436;
        font-weight: 400;
        font-size: 2em;
        border-bottom: 1px solid #2b3436;
    }
`
export const RideContent = styled.section`
    width: 83%;
    display: flex;
    justify-content: space-between;
`
export const RideImage = styled.div`
    width: 30%;
`
export const RideText = styled.div`
    width: 65%; 
    color: #2b3436;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h3{
        font-size: 1.5em;
        font-weight: 400;
        padding-top: 1em;
    }
    button{
        width:20%;
        height:20%;
        font-size: 1.2em;
        background-color:#f8ca11;
        border:none;
        color:#fff;
        &:hover{
            cursor: pointer;
            background-color:#000;
        }
    }
`
export const BottomContainer=styled.section`
position: relative;
`
export const Background =styled.img`
    width:100%;
`
export const BottomText =styled.h2`
    color: #2b3436;
    font-size:4vw;
    font-weight:400;
    padding-bottom:3vh;
`
export const TextContainer =styled.div`
    width:fit-content;
    position:absolute;
    left:40%;
    bottom:57%;
`
export const Phone =styled.img`
    width:20%;
    position:absolute;
    left:77%;
    top:12%;
`