import { Container } from "./styles"

import { IoLogoWhatsapp } from "react-icons/io5";

export function Button( {title, ...rest} ){
  return(
    <Container>

        <a href="https://wa.me/556199550253?text=Olá! Gostaria de falar com um advogado sobre meus direitos trabalhistas." target="_blank">
          <button>
          <IoLogoWhatsapp/> 
            {title}
          </button>
        </a>
        
    </Container>
  )
}
