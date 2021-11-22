import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
`

export const Menu=styled.div`
border: solid red;

display: flex;
justify-content: space-around;
align-items: center;
heigth: 20vh;
background-color: white;
img{
    width: 15%;
}
.blog{
text-transform: capitalize;
}
.faq{
        text-transform: uppercase;
}

.btnEnter{
    text-transform: capitalize;

}
.btnPt{
    border-radius: 50%;
    text-transform: uppercase;
}
`

export const ContainerBoxHeader=styled.div`
display: flex;
align-items: center;
border: solid #000;
`

export const BoxOne=styled.div`
h2{
    margin-left: 2rem;
    font-size: 4rem;
}
p{
    font-size: 28px;
margin-left: 2rem;
}
`

export const BoxTwo=styled.div`
img{
}
`