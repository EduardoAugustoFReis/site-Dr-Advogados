import styled from "styled-components";

import backgroundImg from "../../assets/background_img.jpg";
import {DEVICE_BREAKPOINTS} from "../../styles/layoutBreakpoints"

export const Container = styled.div`
  
  width: 100dvw;
  height: 100vh;

  display: grid;


  grid-template-areas: 
  "header"
  "content"
  "footer";

  .whatsapp-fixed{
    position: fixed;
    bottom: 5%;
    right: 1%;
    z-index: 9999;

    background-color: #21BD5B;

    border-radius: 50%;
    width: 7.0rem;
    height: 7.0rem;

    svg{
      font-size: 5.0rem;
      color: #fff;
      margin-top: 9px;
      margin-left: 1.1rem;
      background: none;
    }

  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM} ){

    .whatsapp-fixed{
      bottom: 10%;
      right: 5%;
    }


  }

`;

export const Header = styled.div`
  grid-area: header;

  width: 100%;

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  text-align: center;

  padding-top: 1.0rem;

  >h1{
    color:	#fff;
    font-size: 4.0rem;
  }

  >h2{
    color: #fff;
    font-size: 3.0rem;
  }
  
  >p{
    font-size: 2.2rem;
    color:	#fff;
    padding-top: 1.0rem;
  }

  .first-whatsapp-button{
    display: flex;
    justify-content: center;
    padding-top: 1.0rem;  
    padding-bottom: 1.0rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM} ){

    width: 100%;
    text-align: center;
    padding: 2.0rem;
     
    >h1{
      font-size: 2.8rem;
    }

    >h2{
      font-size: 2.2rem;
    }

    >p{
      font-size: 1.6rem;
    }

  }

`;

export const Content = styled.div`
  grid-area: content;
  
  width: 100%;

  background-color: #EFEDDC;

  text-align: center;
  padding: 1.0rem 2.0rem;

  >h2{
    font-size: 2.4rem;
    padding-top: 1.0rem;
    padding-bottom: 2.0rem;
  }

  >h3{
    font-size: 2.2rem;
    padding-top: 1.0rem;
  }

  >p{
    font-size: 1.8rem;
    padding-top: 5px;
    padding-bottom: 1.5rem;
  }

  .information_cards_first_line{
    display: flex;
    gap: 1.0rem;
    padding-bottom: 1.0rem;
  }

  .information_cards_second_line{
    display: flex;
    gap: 1.0rem;
    padding-bottom: 1.0rem;
  }

  .attorneys-cards{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5.0rem;
    padding-top: 1.0rem;
    padding-bottom: 2.0rem;
  }
  
  .first-card-attorney, .second-card-attorney{
    width: 475px;

    background-color: #F2F2F2;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    border: none;
    border-radius: 1.0rem;
    padding: 1.2rem;

    >img{
      border-radius: 1.0rem;
      border: none;
    }

    >strong{
      color: #00547f;
      font-size: 1.6rem;
      padding-bottom: 12.0rem;
    }

  }

  .second_whatsapp-button, .third-whatsapp-button{
    display: flex;
    justify-content: center;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM} ){    
     
  
    .information_cards_first_line{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5px 1.0rem;
    }

    .information_cards_second_line{
      display: flex;
      flex-direction: column;
      padding: 5px 1.0rem;
    }

    .attorneys-cards{
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    >h2{
      font-size: 2.2rem;
    }

    >h3{
      font-size: 2.0rem;
    }

    >p{
      font-size: 1.6rem;
    }

  }

`;

export const CardsAttorney = styled.div`
   
   text-align: left;
   
  >p{
    padding: 5px;
    font-size: 2.0rem;  
    color: #000;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    
    >p{
      font-size: 2.0rem;
    }
  }
`;

export const Footer = styled.div`
  grid-area: footer;
  
  padding: 5px;

  background-color: #244D63;

  display: flex;
  align-items: center;
  justify-content: space-around;

  >img{
    height: 180px;
  }

  .address_information{

    >strong{
      font-size: 2.0rem;
      color: #fff;
    }

    >p{
      font-size: 1.8rem;
      color: #fff;
      padding-bottom: 5px;
    }
  } 

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
   
    display: flex;
    align-items: center;
    justify-content: center;

    .address_information{
  
      >strong{
      font-size: 1.6rem;
    }

    >p{
      font-size: 1.4rem;
    }
    }
  }

`;

