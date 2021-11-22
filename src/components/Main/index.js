import React from "react";
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import styled from "styled-components";

const StyledLink = styled(Link)`
  
`;


export function Main() {

    const data = useStaticQuery(graphql`
  query {
    alldata {
      
mains {
    titleprincipalmain
    paragraphmain
    aovivo
    biblioteca
    areasdetrabalho
    exporteecompartilhe
}
  }
  }
    `)

    const {titleprincipalmain,
    paragraphmain,
    aovivo,
    biblioteca,
    areasdetrabalho,
    exporteecompartilhe } = data.alldata.mains[0];
  
    return (
<S.Container>
    <h1> Estou na Main </h1>
    <p> {titleprincipalmain } </p>
     <p> { paragraphmain} </p>
      <p> {aovivo } </p>
       <p> { biblioteca} </p>
        <p> { areasdetrabalho} </p>
         <p> {exporteecompartilhe } </p>

</S.Container>

    );
}