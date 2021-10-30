import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style.js'

export function Main() {
    const data = useStaticQuery(graphql`
        query {
          completedata{
                mainIntros {
                    taxiText
                    taxiTitle
                    taxiImage {
                      url
                    }
                  }
                  mainRides {
                    btn
                    image1 {
                      url
                    }
                    image2 {
                      url
                    }
                    image3 {
                      url
                    }
                    rideTitle
                    text
                    title1
                    title2
                  }
                  mainBottoms {
                    title1
                    title2
                    phone {
                      url
                    }
                    background {
                      url
                    }
                }
            }
        }
    `)

    const { taxiText, taxiTitle, taxiImage } = data.completedata.mainIntros[0]

    return (
        <S.MainContainer>

          <S.SectionOurTaxi>
            <S.BoxTitle>
              <S.Title>{taxiTitle.substring(3, 0)}<span style={{color: "#f8ca11"}}> Taxi</span></S.Title>
            </S.BoxTitle>
            <S.BoxCarsRow>

              <S.Car>
                <S.round>01</S.round>
                <S.CarTitle>CAR 1</S.CarTitle>
                <S.CarParagraph>{taxiText}</S.CarParagraph>
                <S.img src={taxiImage.url}alt=""/>
              </S.Car>

              <S.Car>
                <S.round>02</S.round>
                <S.CarTitle>CAR 2</S.CarTitle>
                <S.CarParagraph>{taxiText}</S.CarParagraph>
                <S.img src={taxiImage.url}alt=""/>
              </S.Car>

              <S.Car>
                <S.round>03</S.round>
                <S.CarTitle>CAR 3</S.CarTitle>
                <S.CarParagraph>{taxiText}</S.CarParagraph>
                <S.img src={taxiImage.url}alt=""/>
              </S.Car>

            </S.BoxCarsRow>
          </S.SectionOurTaxi>
            
        </S.MainContainer>
    )
}
