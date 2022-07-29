import styled from "styled-components";


export const Li = styled.li `
text-align: center;
background-image: linear-gradient(to right, rgba(255,255,255,1), ${(props)=>(props.color)});
border-radius: 8px;
border: 1.5px solid black;


h3{
    border-radius: 8px  8px 0 0;
    font-size: 1.2rem;
    font-weight: 500;
    color: black;
    -webkit-text-stroke-width: 0.2px;
    padding: 0.2rem 0;
}
img{
    border-radius:10%;
    width: 90%;
}

span{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: black;
    font-size: 20px;
    padding: 3px 10px;
    font-weight: 600;
    border-radius:0 0 8px  8px;

}

@media screen and (min-width:651px){
    width: 15rem;
}
@media screen and (min-width:820px){
    width: 12.5rem;
}
@media screen and (min-width:950px){
    width: 9rem;
}
@media screen and (min-width:1336px){
    width: 12.5rem;
}
@media screen and (min-width:1400px){
    width: 11rem;
}

`