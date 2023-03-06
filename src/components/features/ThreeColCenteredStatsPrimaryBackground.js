import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container as ContainerBase, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionDescription } from "components/misc/Typography";

const Container = tw(ContainerBase)`my-8 lg:my-10 bg-primary-900 text-gray-100 -mx-8 px-8`;
const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;
const Subheading = tw(SubheadingBase)`text-gray-100 text-center`;
const Description = tw(SectionDescription)`text-justify text-gray-400 text-center mx-auto max-w-screen-xl`;

const StatsContainer = tw.div`mt-8 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md justify-between mx-auto`
const Stat = tw.div`flex flex-col text-center p-4 tracking-wide`
const StatKey = tw.div`text-xl font-medium`
const StatValue = tw.div`text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black`

export default ({
  subheading = "",
  heading = "Historia",
  description = "MARSED nace en el año 2004, como una empresa prestadora de servicios técnicos especializados para empresas de servicios públicos"+
  " domiciliarios, ya para ese tiempo con la utilización de las tecnologías más avanzadas, desarrolla e implementa el proceso de Lectofacturación de"+
  " consumos de Energía Eléctrica, Agua Potable y Gas Canalizado, posteriormente implementa la Gestión de Recuperación de Cartera, Actualización del "+
  "Catastro de Clientes, Estandarización de Procesos en Instalación de Medidores de Consumo, Sistemas y procesos desarrollados de acuerdo a las necesidades"+
  " específicas del mercado ecuatoriano.",
  description2 = "El crecimiento constante de la población y los servicios públicos que demanda, condiciona el mejoramiento constante"+
  " de las empresas prestadoras de servicios de Energía Eléctrica, Agua Potable, GLP Canalizado y Servicios Urbanos, la calidad de los servicios es un tema crucial"+
  " y es allí donde nuestra empresa se especializa y desarrolla tecnologías para brindar una información constante y permanente a los usuarios de estos servicios, "+
  "así como a la empresa prestadora del servicio.",
  description3 = "En el transcurso de estos "+ ((new Date().getFullYear()) - 2004) +" años, el desarrollo de las tecnologías de información y telecomunicaciones han sido"+
  " un desafío constante y permanente para la innovación y el desarrollo de nuevos procesos que permitan mejorar los servicios que nuestra empresa brinda.",
  description4 = "Somos la principal empresa en la innovación, desarrollo e implementación de procesos de cierre completo de servicios públicos domiciliarios proveyendo"+
  " Hardware y Software de producción nacional.",
  stats = [
    {
      key: "Clients",
      value: "2500+",
    },
    {
      key: "Revenue",
      value: "$100M+",
    },
    {
      key: "Employees",
      value: "150+",
    },
  ]
}) => {
  return (
    <div id="Nosotros">
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
          {description2 && <Description>{description2}</Description>}
          {description3 && <Description>{description3}</Description>}
          {description4 && <Description>{description4}</Description>}
        </HeadingContainer>
        {/* <StatsContainer>
          {stats.map((stat, index) => (
            <Stat key={index}>
              <StatValue>{stat.value}</StatValue>
              <StatKey>{stat.key}</StatKey>
            </Stat>
          ))}
        </StatsContainer> */}
      </ContentWithPaddingXl>
    </Container>
    </div>

  );
};
