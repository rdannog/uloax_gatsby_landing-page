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
    return (
        <div>
            <h1>Main</h1>
        </div>
    )
}
