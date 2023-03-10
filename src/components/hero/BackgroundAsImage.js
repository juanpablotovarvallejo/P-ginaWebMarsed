import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default (props) => {

  const scrollInicio = (e) =>{
    const element = document.getElementById('Inicio');
    e.preventDefault();
    if (element){
      window.scrollTo(0,element.getBoundingClientRect().top)
    }
  }
  const scrollNosotros = (e) =>{
    const element = document.getElementById('Nosotros');
    e.preventDefault();
    if (element){
      window.scrollTo(0,element.getBoundingClientRect().top)
    }
  }
  const scrollProductos = (e) =>{
    const element = document.getElementById('Productos');
    e.preventDefault();
    if (element){
      window.scrollTo(0,element.getBoundingClientRect().top)
    }
  }
  const scrollServicios = (e) =>{
    const element = document.getElementById('Servicios');
    e.preventDefault();
    if (element){
      window.scrollTo(0,element.getBoundingClientRect().top)
    }
  }
  const scrollControl = (e) =>{
    const element = document.getElementById('Control');
    e.preventDefault();
    if (element){
      window.scrollTo(0,element.getBoundingClientRect().top)
    }
  }
  const scrollContactos = (e) =>{
    const element = document.getElementById('Contacto');
    e.preventDefault();
    if (element){
      window.scrollTo(0,element.getBoundingClientRect().top)
    }
  }

  const navLinks = [
    <NavLinks key={1}>
      <NavLink onClick={scrollInicio} href="">
        Inicio
      </NavLink>
      <NavLink onClick={scrollNosotros} href="">
        Nosotros
      </NavLink>
      <NavLink onClick={scrollProductos} href="">
        Productos
      </NavLink>
      <NavLink onClick={scrollServicios} href="">
        Servicios
      </NavLink>
      <NavLink onClick={scrollControl} href="">
        Control
      </NavLink>
      <NavLink onClick={scrollContactos} href="">
        Contacto
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Notification>Marsed S.A.</Notification>
            <Heading>
              <SlantedBackground>Empresa de servicios t??cnicos especializados y desarrollo de software</SlantedBackground>
            </Heading>
          </LeftColumn>
          <RightColumn>
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
