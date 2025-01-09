import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import { Snackbar } from '@mui/material';
import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(175, 80%, 60%, 1);
  background: linear-gradient(225deg, hsla(175, 80%, 60%, 1) 0%, hsla(145, 63%, 49%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(175, 80%, 60%, 1) 0%, hsla(145, 63%, 49%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(175, 80%, 60%, 1) 0%, hsla(145, 63%, 49%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`



const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const form = useRef();
  const { isBrazilFlag } = useContext(LanguageContext);

  const sendEmail = (e) => {
    e.preventDefault();
    
    const formElements = form.current.elements;
    const templateParams = {
      from_name: formElements.from_name.value,
      from_email: formElements.from_email.value,
      subject: formElements.subject.value,
      message: formElements.message.value,
      to_name: 'Lucas Marujo',
      reply_to: formElements.from_email.value
    };

    emailjs.send(
      'service_f321mo7',
      'template_f7iskbn',
      templateParams,
      '-lZl33DFNQYgKHTEA'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setOpen(true);
      form.current.reset();
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setError(true);
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title>{isBrazilFlag ? "Entrar em contato" : "Contact Me"}</Title>
        <Desc>
          {isBrazilFlag 
            ? "Sinta-se livre para me mandar suas dúvidas e oportunidades!"
            : "Feel free to send me your questions and opportunities!"
          }
        </Desc>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <ContactTitle>
            {isBrazilFlag ? "Me Envie Um Email 🚀" : "Send Me An Email 🚀"}
          </ContactTitle>
          <ContactInput placeholder={isBrazilFlag ? "Seu Email" : "Your Email"} name="from_email" required />
          <ContactInput placeholder={isBrazilFlag ? "Seu Nome" : "Your Name"} name="from_name" required />
          <ContactInput placeholder={isBrazilFlag ? "Assunto" : "Subject"} name="subject" required />
          <ContactInputMessage placeholder={isBrazilFlag ? "Mensagem" : "Message"} rows="4" name="message" required />
          <ContactButton type="submit" value={isBrazilFlag ? "Enviar" : "Send"} />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message="Email enviado com sucesso!"
          severity="success"
        />
        <Snackbar
          open={error}
          autoHideDuration={6000}
          onClose={()=>setError(false)}
          message="Erro ao enviar o email. Tente novamente."
          severity="error"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact