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

    const {about, address, addressText, booking, contact, copyright, facebook, facebookIcon, instagram, instagramIcon, linkedin, linkedinIcon, listStyle, listTitle1, listTitle2, newsTitle, subscribeBtn, taxi, twitter, twitterIcon, youtube, youtubeIcon } = data.completedata.footers[0]

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
              <S.Item><S.icon href="#" id="slide" src={listStyle.url}/> <S.a>Home</S.a></S.Item>
              <S.Item><S.icon href="#" id="slide" src={listStyle.url}/> <S.a>{about}</S.a></S.Item>
              <S.Item><S.icon href="#" id="slide" src={listStyle.url}/> <S.a>{taxi}</S.a></S.Item>
              <S.Item><S.icon href="#" id="slide" src={listStyle.url}/> <S.a>{booking}</S.a></S.Item>
              <S.Item><S.icon href="#" id="slide" src={listStyle.url}/> <S.a>{contact}</S.a></S.Item>
            </S.Links>
            <S.Follow>
              <S.Title>{listTitle2}</S.Title>
              <S.Itemsocial><S.icon href="#" id="slide" src={facebookIcon.url}/> <S.a>{facebook}</S.a></S.Itemsocial>
              <S.Itemsocial><S.icon href="#" id="slide" src={twitterIcon.url}/> <S.a>{twitter}</S.a></S.Itemsocial>
              <S.Itemsocial><S.icon href="#" id="slide" src={linkedinIcon.url}/> <S.a>{linkedin}</S.a></S.Itemsocial>
              <S.Itemsocial><S.icon href="#" id="slide" src={youtubeIcon.url}/> <S.a>{youtube}</S.a></S.Itemsocial>
              <S.Itemsocial><S.icon href="#" id="slide" src={instagramIcon.url}/> <S.a>{instagram}</S.a></S.Itemsocial>
            </S.Follow>
            <S.News>
              <S.Title>{newsTitle}</S.Title>
              <label>
              <S.input placeholder="Enter Your Email"/>
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
