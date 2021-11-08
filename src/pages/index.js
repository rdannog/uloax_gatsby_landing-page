import React from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Main } from "../components/main";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
  cursor:default;
  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
}
body{
  background-color:#1a1a1a;
}
a{
  text-decoration:none;
  color:inherit;
}
button:hover{
  transition:0.7s ease-in;
}
`

export default function Index() {
  return (
    <div>
      <Helmet>
        <title>ULOAX</title>
      </Helmet>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
