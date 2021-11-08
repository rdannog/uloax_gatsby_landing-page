import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style.js'

export function Footer() {
  const data = useStaticQuery(graphql`
        query {
          completedata{
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

  const { about, address, addressText, booking, contact, copyright, facebook, facebookIcon, instagram, instagramIcon, linkedin, linkedinIcon, listStyle, listTitle1, listTitle2, newsTitle, subscribeBtn, taxi, twitter, twitterIcon, youtube, youtubeIcon } = data.completedata.footers[0]

  return (
    <S.Footer>
      <S.FooterContainer>
        <a id="footer"></a>
        <S.FooterContent>
          <S.Adress>
            <S.Title>{address}</S.Title>
            <S.Paragraph>{addressText}</S.Paragraph>
          </S.Adress>
          <S.Links>
            <S.Title>{listTitle1}</S.Title>
            <S.Item>
              <S.icon src={listStyle.url} alt=""/> 
              <S.a href="#slide">Home</S.a>
            </S.Item>
            <S.Item>
              <S.icon src={listStyle.url} alt=""/> 
              <S.a href="#slide">{about}</S.a>
            </S.Item>
            <S.Item><S.icon src={listStyle.url} alt=""/> <S.a href="#taxi">{taxi}</S.a></S.Item>
            <S.Item><S.icon src={listStyle.url} alt=""/> <S.a href="#ride">{booking}</S.a></S.Item>
            <S.Item><S.icon src={listStyle.url} alt=""/> <S.a href="#footer">{contact}</S.a></S.Item>
          </S.Links>
          <S.Follow>
            <S.Title>{listTitle2}</S.Title>
            <S.Itemsocial><S.icon src={facebookIcon.url} alt=""/> <S.a href="#">{facebook}</S.a></S.Itemsocial>
            <S.Itemsocial><S.icon src={twitterIcon.url} alt=""/> <S.a href="#">{twitter}</S.a></S.Itemsocial>
            <S.Itemsocial><S.icon src={linkedinIcon.url} alt=""/> <S.a href="#">{linkedin}</S.a></S.Itemsocial>
            <S.Itemsocial><S.icon src={youtubeIcon.url} alt=""/> <S.a href="#">{youtube}</S.a></S.Itemsocial>
            <S.Itemsocial><S.icon src={instagramIcon.url} alt=""/> <S.a href="#">{instagram}</S.a></S.Itemsocial>
          </S.Follow>
          <S.News>
            <S.Title>{newsTitle}</S.Title>
            <label>
              <S.input placeholder="Enter Your Email" />
            </label>
            <S.Button>{subscribeBtn}</S.Button>
          </S.News>
        </S.FooterContent>
      </S.FooterContainer>
      <S.CopyrightBox>
        <S.Copyright>{copyright}</S.Copyright>
      </S.CopyrightBox>
    </S.Footer>
  )
}
