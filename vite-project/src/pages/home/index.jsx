import {Container, Header, Content, CardsAttorney, Footer} from "./style"

import { Button } from "../../components/Button";
import { Section } from "../../components/Section";

import robertoImg from "../../assets/Roberto.jpg";
import danielImg from "../../assets/Daniel.jpg";
import logoTransparente from "../../assets/logo_site_transparente.png"

import { IoLogoWhatsapp } from "react-icons/io5";

export function Home(){
  return(
    <Container>

      <div className="whatsapp-fixed">
        <a href="https://wa.me/556199550253?text=Olá! Gostaria de falar com um advogado sobre meus direitos trabalhistas." target="_blank">
          <IoLogoWhatsapp/>
        </a>
      </div>
      
      <Header>        
          <h2>DR ADVOGADOS ASSOCIADOS</h2>
          <h1>ADVOGADO TRABALHISTA</h1>
          <p>Dúvidas sobre seus direitos trabalhistas? Fale agora diretamente com nosso advogado especialista.</p>

          <div className="first-whatsapp-button">
          <Button title={"QUERO FALAR GRATUITAMENTE SOBRE MEU CASO "}/>
          </div>

      </Header>

      <Content>
        
        <h2>SOLUCIONAMOS SEUS DIREITOS</h2>

        <div className="information_cards_first_line">
        
        <Section title={"Verbas rescisórias"}>
          <CardsAttorney>
          <p>Saiba todas as verbas rescisórias que você tem direito ao ser demitido. Entre em contato!</p>
          </CardsAttorney>
        </Section>

        <Section title={"Horas extras"}>
          <CardsAttorney>
            <p>Saiba como receber pelas horas extras que você trabalhou, mas não foram pagas. Fale com a gente!</p>
          </CardsAttorney>
        </Section>

        <Section title={"Trabalho sem carteira assinada"}>
          <CardsAttorney>
            <p>Saiba como reconhecer o vínculo de emprego e todos os valores que pode receber. Entre em contato! </p>
          </CardsAttorney>
        </Section>

        </div>

        <div className="information_cards_second_line">
      
          <Section title={"Atraso ou não pagamento de salário"}>
            <CardsAttorney>
              <p>Saiba como receber os salários que não foram pagos. Fale com um advogado especialista!</p>
            </CardsAttorney>
          </Section>

          <Section title={"Acidente de trabalho"}>
            <CardsAttorney>
              <p>Sofreu um acidente de trabalho? Saiba seus direitos. Conheça as proteções legais, incluindo indenizações e estabilidade no emprego. Fale com a gente!</p>
            </CardsAttorney>
          </Section>

          <Section title={"Outros casos"}>
            <CardsAttorney>
              <p>Dúvidas sobre 13º salário, férias, FGTS, demissão, assédio moral, adicional de insalubridade e periculosidade, desvio de função, acúmulo função ou outro caso? Entre em contato com a gente!</p>
            </CardsAttorney>
          </Section>
        </div>   

        <div className="second_whatsapp-button">
        <Button title={"QUERO FALAR SOBRE MEU CASO"}/>
        </div>

        <h3>ADVOGADOS ESPECIALISTAS</h3>
        <p>Nosso time de advogados tem a experiência necessária para garantir os seus direitos.</p>

        <div className="attorneys-cards">

          <div className="first-card-attorney">
          <img src={danielImg} alt="Foto do advogado Daniel Augusto" />
          <strong>
            DR DANIEL AUGUSTO FRANCISCON REIS <br/> 
            OAB/DF 44.320
          </strong>
          </div>

          <div className="second-card-attorney">
          <img src={robertoImg} alt="Foto do advogado Roberto Augusto" />
            <strong>
              DR ROBERTO AUGUSTO NUNES FRANCISCON <br />
            OAB/DF 57.807
            </strong>
          </div>

        </div>
        

        <div className="third-whatsapp-button">
        <Button title={"FALAR COM O ADVOGADO ESPECIALISTA"}/>
        </div>    

      </Content>


      <Footer>

        <img src={logoTransparente} alt="" />
        
        <div className="address_information">

        <strong>Endereço</strong>
        <p>
          Ed. Taguatinga Trade Center, <br /> C 01, Lotes 01/12, sala 517, <br /> Taguatinga Centro/DF, CEP: 72.010-010.
        </p>

        <strong>Telefone para contato</strong>
        <p>(61) 9955-0253</p>

        </div>
        
      </Footer>
      
    </Container>
  )
}