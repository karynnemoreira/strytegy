import React from "react";
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import styled from "styled-components";

const StyledLink = styled(Link)`
  
`;


export function Header() {

    const data = useStaticQuery(graphql`
    query {
      alldata {
   headers {
    logoheader {
      url
    }
    blog
    faq
    btnentrar
    btnpt
    titleprincipalheader
    paragraphheader
    btncomecar
    imgheader {
      url
    }
  }

      }
    }
      `)
  
    const { logoheader,
    blog,
    faq,
    btnentrar,
    btnpt,
    titleprincipalheader,
    paragraphheader,
    btncomecar,
    imgheader } = data.alldata.headers[0];
  
    return (
<S.Container>
    <S.Menu>
    <img src ={logoheader} alt=""/>
    <ul>
        <li>{blog}</li>
        <li> {faq} </li>
        <button> {btnentrar}</button>
        <button> {btnpt} </button>
    </ul>
    </S.Menu>
<S.ContainerBoxHeader> 
<S.BoxOne>
<h2> {titleprincipalheader} </h2> 
<p> {paragraphheader} </p>
<button> {btncomecar}</button>
</S.BoxOne>

<S.BoxTwo>
<img src={imgheader} alt=""/>

</S.BoxTwo>


</S.ContainerBoxHeader>

</S.Container>

    );
}