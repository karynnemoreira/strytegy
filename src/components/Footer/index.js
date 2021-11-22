import React from "react";
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import styled from "styled-components";

const StyledLink = styled(Link)`
  
`;


export function Footer() {

   const data = useStaticQuery(graphql`  
  query {
    alldata{
  footers {
    sobrenos
    paragraphfooter
  }
    
}
    }                                                                                                                
  
  `  )
  
    const { sobrenos,
    paragraphfooter } = data.alldata.footers[0];
  
    return (
<S.Container>
    <h1> Estou no Footer </h1>
    <p> {sobrenos} </p>
    <p> {paragraphfooter} </p>

</S.Container>

    );
}