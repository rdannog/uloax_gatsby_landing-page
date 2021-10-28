import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'


export function Header() {
    const data = useStaticQuery(graphql`
        query {
            alldata{
                headers {
                    bookingbtn
                    contactbtn
                    logo {
                      url
                    }
                    taxibtn
                    homebtn
                  }
                  headerSlides {
                    bookText
                    bookTitle
                    phoneNumber
                    searchBtn
                    formTitle
                    taxi1 {
                      url
                    }
                    taxi2 {
                      url
                    }
                  }
            }
        }
    `)

    const {bookingbtn, contactbtn, logo, taxibtn, homebtn, bookText, bookTitle, phoneNumber, searchBtn, formTitle, taxi1, taxi2} = data.alldata.headers[0]

    return (
        <S.HeaderContainer>
            <S.Nav>
                <S.NavLogo src={logo.url} alt="logo"/>
                    <S.List>
                        <S.Items href="#" id="slide" >{homebtn}</S.Items>
                        <S.Items href="#" id="taxi" >{taxibtn}</S.Items>
                        <S.Items href="#" id="ride" >{bookingbtn}</S.Items>
                        <S.Items href="#" id="footer" >{contactbtn}</S.Items>
                    </S.List>
            </S.Nav>
            
        </S.HeaderContainer>
    )
}
