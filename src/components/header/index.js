import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {Slide} from './slide'
import * as S from './style'


export function Header() {
    const data = useStaticQuery(graphql`
        query {
            completedata{
                headers {
                    bookingbtn
                    contactbtn
                    logo {
                      url
                    }
                    taxibtn
                    homebtn
                  }
            }
        }
    `)
    const {bookingbtn, contactbtn, logo, taxibtn, homebtn} = data.completedata.headers[0]
    
    return (
      <S.HeaderContainer>
        <S.Nav>
          <S.NavLogo src={logo.url} alt="logo"/>
          <S.List>
              <S.Items href="#slide">{homebtn}</S.Items>
              <S.Items href="#taxi">{taxibtn}</S.Items>
              <S.Items href="#ride">{bookingbtn}</S.Items>
              <S.Items href="#footer">{contactbtn}</S.Items>
          </S.List>    
        </S.Nav>
        <a href="#" id="slide"></a>
        <Slide />
    </S.HeaderContainer>
  )
}
