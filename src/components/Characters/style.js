import styled from "styled-components";

import Back from "../../img/Back.jpg"

export const Main = styled.main `
@import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital@1&display=swap');

background-image: url(${Back});
display: flex;
flex-direction: column;
align-items: center;
width: auto;
justify-content: center;
height: 100vh;
background-attachment: fixed;

> img{
    margin-bottom: 2rem;
    height: 8vh;
}


 > div{
    display: flex;
    width: 100%;
    justify-content: space-around;

    button{
        margin: 1rem 0;
        height: 2.5rem;
        border: 2px solid rgb(192,223,64);
        background-color: rgb(75,181,203);
        border-radius:1rem;
        font-size: 1.3rem;
        font-family: Square;
        font-weight: 700;
        cursor: pointer;
    }
}

> ul{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    width: 90%;
    height: 80vh;
}

@media screen and (min-width:500px){
    > img{
    height: 6rem;
}


}
`