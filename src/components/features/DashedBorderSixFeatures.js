import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    { imageSrc: ShieldIconImage,title: "Comercializaci??n en Tiempo real"},
    { imageSrc: SupportIconImage, title: "Inspecciones T??cnicas, Datos, Mantenimiento, Nuevos Servicios, Da??os" },
    { imageSrc: CustomizeIconImage, title: "Reclamos,Monitoreo y Control" },
    { imageSrc: ReliableIconImage, title: "Levantamiento de Activos" },
    { imageSrc: FastIconImage, title: "Catastro Medidores y Clientes" },
    { imageSrc: SimpleIconImage, title: "Instalaciones Medidores, Redes, Alumbrado P??blico, Transformadores, Postes" },
    { imageSrc: ShieldIconImage,title: "Reporte de Novedades, Actualizaci??n de Datos permanente"},
    { imageSrc: SupportIconImage, title: "Gesti??n de Cartera, Notificaciones, Corte, Reconexi??n del Servicio" },
    { imageSrc: CustomizeIconImage, title: "Mantenimiento de Plantas de Agua" },
    { imageSrc: ReliableIconImage, title: "Redes y V??lvulas de Distribuci??n con Telemetr??a" },
    { imageSrc: FastIconImage, title: "Sistemas Canalizados de Gas para Edificios, Conjuntos, Centros Comerciales, Residencias" },
    { imageSrc: SimpleIconImage, title: "Lectura de Consumo, Facturaci??n, Reparto de Planillas, Lectofacturaci??n" },
  ];

  return (
    <Container id="Servicios">
      <ThreeColumnContainer>
      <Subheading>Servicios</Subheading>
        <Heading>Nuestros <span tw="text-primary-500">Servicios</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title}</span>
                <p className="description">
                  {card.description}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
