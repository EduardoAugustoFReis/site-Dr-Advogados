import { createGlobalStyle } from "styled-components";
import {DEVICE_BREAKPOINTS} from "./layoutBreakpoints"

export default createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
    overflow-x: hidden;
    ::-webkit-scrollbar {
    width: 3px; 
    }

    ::-webkit-scrollbar-thumb {
    background-color: #ccc; 
    border-radius: 5px;   
    }

    ::-webkit-scrollbar-thumb:hover {
    background-color: #999;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      
    }

  }

  body{
    font-family: 'Open Sans', sans-serif;
  }

  a, button{
    text-decoration: none;
    cursor: pointer;
  }

  button:hover, a:hover{
    filter: brightness(0.9);
  }

`;