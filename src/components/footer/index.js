import React from 'react'
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
    return (
        <div>
            <p>oi</p>
        </div>
    )
}
