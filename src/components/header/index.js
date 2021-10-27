import React from 'react'
import * as S from './style'
export function Header() {
    return (
        <S.HeaderContainer>
            <S.Nav>
                <S.NavLogo/>
                    <S.List>
                        <S.Items>Home</S.Items>
                        <S.Items>Taxi</S.Items>
                        <S.Items>Booking</S.Items>
                        <S.Items>Contact Us</S.Items>
                    </S.List>
            </S.Nav>
        </S.HeaderContainer>
    )
}
