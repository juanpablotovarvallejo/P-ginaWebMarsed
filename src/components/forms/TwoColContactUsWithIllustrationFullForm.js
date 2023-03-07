import React, { useRef } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import emailjs from '@emailjs/browser';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default ({
  subheading = "Contáctenos",
  heading = <><span tw="text-primary-500">Contacto</span><wbr /></>,
  description = "",
  submitButtonText = "Enviar",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4v7nhqn', 'template_nve1vug', form.current, 'wV1ZoxBB9FCzNSaYb')
        .then((result) => {
            console.log(result.text);
        }, (error) => { 
            console.log(error.text);    
        });
        document.querySelectorAll('input').forEach(element => {
            element.value = '';
        });
        document.querySelector('textarea').value = '';
};

  return (
    <Container id="Contacto">
      <TwoColumn>
        <ImageColumn>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.8988406623887!2d-78.48796389427642!3d-0.18429169998804823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b554b43e505%3A0x759ebf6e98dbeb41!2sEmpresa%20Marsed%20S.A!5e0!3m2!1ses!2sec!4v1678070155701!5m2!1ses!2sec"
            width="600"
            height="450"
            style={{ border: "0", marginTop: "10rem" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form ref={form} action={formAction} method={formMethod}>
              <Input type="email" name="from_email" placeholder="Tu correo electrónico" />
              <Input type="text" name="from_name" placeholder="Nombre" />
              <Input type="text" name="from_subject" placeholder="Asunto" />
              <Textarea name="message" placeholder="Tu mensaje" />
              <SubmitButton onClick={sendEmail} type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
