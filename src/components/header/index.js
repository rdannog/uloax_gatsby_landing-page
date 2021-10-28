import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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

    const {bookingbtn, contactbtn, logo, taxibtn, homebtn} = data.completedata.headers[0]
    const {bookText, bookTitle, phoneNumber, searchBtn, formTitle, taxi1, taxi2} = data.completedata.headerSlides[0]

    return (
      <S.HeaderContainer>
        <S.Nav>
          <S.NavLogo src={logo.url} alt="logo"/>
          <S.List>
            <S.Items>{homebtn}</S.Items>
            <S.Items>{taxibtn}</S.Items>
            <S.Items>{bookingbtn}</S.Items>
            <S.Items>{contactbtn}</S.Items>
          </S.List>    
        </S.Nav>
        <S.HeaderSlides>
          <S.Slide>
            <S.BookContact>
              <S.ContactContainer>
                <S.BookTitle>
                  {bookTitle}
                </S.BookTitle>
                <S.Phone>
                  {phoneNumber}
                </S.Phone>
              </S.ContactContainer>
              <S.Taxi>
                <S.TaxiImg src={taxi2.url} alt="taxi1"/>
              </S.Taxi>
            </S.BookContact>
            <S.BookingForm>
              <S.FormTitle>{bookText}</S.FormTitle>
              <S.Form>
                <S.FormText>{formTitle}</S.FormText>
                <S.FormInput placeholder="PICKUP"/>
                <S.FormInput placeholder="DROP"/>
                <S.FormInput placeholder="WHEN"/>
                <div>
                  <S.FormButton>{searchBtn}</S.FormButton>
                </div>
              </S.Form>
            </S.BookingForm>
          </S.Slide>
        </S.HeaderSlides>
      </S.HeaderContainer>
    )
}

//$('.autoplay').slick({
//  slidesToShow: 3,
//  slidesToScroll: 1,
//  autoplay: true,
//  autoplaySpeed: 2000,
//});