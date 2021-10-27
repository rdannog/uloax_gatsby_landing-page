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

    return (
        <S.HeaderContainer>
            <S.Nav>
                <S.NavLogo/>
                    <S.List>
                        <S.Items>Home</S.Items>
                        <S.Items>Taxi</S.Items>
                        <S.Items>Booking</S.Items>
                        <S.Items>Contact Us</S.Items>
                    </S.List>
            </S.Nav>
        </S.HeaderContainer>
    )
}
