import React from "react";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from 'gatsby'
import * as S from "./style";


export function Slide() {
    const data = useStaticQuery(graphql`
        query {
            completedata{
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
    const {bookText, bookTitle, phoneNumber, searchBtn, formTitle, taxi1, taxi2} = data.completedata.headerSlides[0]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2200,
        pauseOnHover: true,
    }
   
    return (
       <S.HeaderSlides>
           <Helmet>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
           </Helmet>
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
        </Slider>  
      </S.HeaderSlides>
  )
}
