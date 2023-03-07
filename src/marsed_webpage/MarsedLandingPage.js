import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Historia from "components/features/ThreeColCenteredStatsPrimaryBackground";
import Clientes from "components/cards/ProfileThreeColGrid"
import Descripcion from "components/features/TwoColSingleFeatureWithStats2.js";
import Equipo from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Servicios from "components/features/DashedBorderSixFeatures.js";
import Control from "components/features/ThreeColSimple.js";
import Productos from "components/faqs/SimpleWithSideImage.js";
import Contacto from "components/forms/TwoColContactUsWithIllustrationFullForm";
import Footer from "components/footers/FiveColumnDark";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Descripcion />
    <Equipo />
    <Historia />
    <Clientes />
    <Productos
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="Productos"
      heading={
        <>
          Nuestros <span tw="text-primary-500">Productos</span>
        </>
      }
    />
    <Servicios />
    <Control />
    <Contacto />
    <Footer />
  </AnimationRevealPage>
);
