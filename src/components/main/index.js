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
    const { btn, image1, image2, image3, rideTitle, text, title1, title2 } = data.completedata.mainRides[0]
    const { phone, background, title11, title22 } = data.completedata.mainBottoms[0]


    return (
        <S.MainContainer>

          <S.SectionOurTaxi>
            <a id="taxi"></a>
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
          <S.RideContainer>
            <a id="ride"></a>
            <S.RideTitle>
              <h2>{rideTitle.substring(9, 0)} 
                <span style={{color: "#f8ca11"}}>
                   With Uloax
                </span>
              </h2>
            </S.RideTitle>
            <S.RideContent>
              <S.RideImage>
                <img src={image1.url} alt=""/>
              </S.RideImage>
              <S.RideText>
                <h3>{title1}</h3>
                <p>{text}</p>
                <button>{btn}</button>
              </S.RideText>
            </S.RideContent>
            <S.RideContent>
              <S.RideText>
                <h3 style={{textAlign:"right"}}>{title2}</h3>
                <p style={{textAlign:"right"}}>{text}</p>
                <button style={{alignSelf:"end"}}>{btn}</button>
              </S.RideText>
              <S.RideImage>
                <img src={image2.url} alt=""/>
              </S.RideImage>
            </S.RideContent>
            <S.RideContent>
              <S.RideImage>
                <img src={image3.url} alt=""/>
              </S.RideImage>
              <S.RideText>
                <h3>{title1}</h3>
                <p>{text}</p>
                <button>{btn}</button>
              </S.RideText>
            </S.RideContent>
            <S.RideContent>
              <S.RideText>
                <h3 style={{textAlign:"right"}}>{title2}</h3>
                <p style={{textAlign:"right"}}>{text}</p>
                <button style={{alignSelf:"end"}}>{btn}</button>
              </S.RideText>
              <S.RideImage>
                <img src={image3.url} alt=""/>
              </S.RideImage>
            </S.RideContent>
          </S.RideContainer>
          <S.BottomContainer style={{backgroundImage:`url(${background.url})`}}>

          </S.BottomContainer>
        </S.MainContainer>
    )
}
