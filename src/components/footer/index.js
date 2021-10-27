import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style.js'

export function Footer() {
    const data = useStaticQuery(graphql`
        query {
            alldata{
                footers {
                    about
                    address
                    addressText
                    booking
                    contact
                    copyright
                    facebook
                    facebookIcon {
                      url
                    }
                    instagram
                    instagramIcon {
                      url
                    }
                    linkedin
                    linkedinIcon {
                      url
                    }
                    listStyle {
                      url
                    }
                    listTitle1
                    listTitle2
                    newsTitle
                    subscribeBtn
                    taxi
                    twitter
                    twitterIcon {
                      url
                    }
                    youtube
                    youtubeIcon {
                      url
                    }
                  }
            }
        }
    `)

    const {about, address, addressText, booking, contact, copyright, facebook, facebokIcon, instagram, instagramIcon, linkedin, linkedinIcon, listStyle, listTitle1, listTitle2, newsTtitle, subscribrBtn, taxi, twitter, twitterIcon, youtube, youtubeIcon } = data.alldata.footers[0]

    return (
        <S.FooterContainer>
            <S.Adress>
              <p>{address}</p>
              <p>{addressText}</p>
            </S.Adress>
            <S.Links>
              <p>{listTitle1}</p>
              <li><img src={listStyle.url}/> <a>{about}</a></li>
              <li></li>
            </S.Links>
            <S.Follow></S.Follow>
            <S.News></S.News>
        </S.FooterContainer>
    )
}
