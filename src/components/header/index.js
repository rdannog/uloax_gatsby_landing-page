import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
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
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2200,
      arrows: false,
    };

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
        <a id="slide"></a>
       <S.HeaderSlides>
        <Slider {...settings}>
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
                <S.TaxiImg src={taxi2.url} alt="taxi1"/>
              </S.BookContact>
              <S.BookingForm>
                <S.FormTitle>{bookText}</S.FormTitle>
                <S.Form>
                  <S.FormText>{formTitle}</S.FormText>
                  <S.FormInput placeholder="PICKUP"/>
                  <S.FormInput placeholder="DROP"/>
                  <S.FormInput placeholder="WHEN"/>
                  <S.SearchBtn>{searchBtn}</S.SearchBtn>
                </S.Form>
              </S.BookingForm>
          </S.Slide>
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
              <S.TaxiImg src={taxi1.url} alt="taxi1"/>
            </S.BookContact>
            <S.BookingForm>
              <S.FormTitle>{bookText}</S.FormTitle>
              <S.Form>
                <S.FormText>{formTitle}</S.FormText>
                <S.FormInput placeholder="PICKUP"/>
                <S.FormInput placeholder="DROP"/>
                <S.FormInput placeholder="WHEN"/>
                <S.SearchBtn>{searchBtn}</S.SearchBtn>
              </S.Form>
            </S.BookingForm>
          </S.Slide>
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
              <S.TaxiImg src={taxi2.url} alt="taxi1"/>
            </S.BookContact>
            <S.BookingForm>
              <S.FormTitle>{bookText}</S.FormTitle>
              <S.Form>
                <S.FormText>{formTitle}</S.FormText>
                <S.FormInput placeholder="PICKUP"/>
                <S.FormInput placeholder="DROP"/>
                <S.FormInput placeholder="WHEN"/>
                <S.SearchBtn>{searchBtn}</S.SearchBtn>
              </S.Form>
            </S.BookingForm>
          </S.Slide>
        </Slider>             
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