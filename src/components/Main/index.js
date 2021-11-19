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
   

      }
    }
      `)
  
    const {  } = data.alldata.headers[0];
  
    return (
<S.Container>
    <h1> Estou na Main </h1>

</S.Container>

    );
}