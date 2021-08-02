"use strict";
const nodemailer = require("nodemailer");

async function main() {

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jazmin.purdy21@ethereal.email',
        pass: 'TubsgkKcwaqnfH93B8'
    },

    tls:{
        rejectUnauthorized: false
    }
});

  let info = await transporter.sendMail({
    from: '"Jazmin Purdy", jazmin.purdy21@ethereal.email',
    to: "Crisis, crisishd2332@gmail.com",
    subject: "Hallo!",
    text: "POGGERS CHAT",
    html: "<b>Olá a todos, sou Gabriel Vinicios de Oliveira, e quero ser programador. <br/>Sou de Palhoça, atualmente tenho 18 anos, e possuo uma vontade imensa em participar deste mercado. <br/>Tenho conhecimento prévio em Javascript, Typescript, NodeJS, e ainda aprendo mais sobre as tecnologias do mercado todo dia. <br/>Mesmo com um vício de falar as palavras 'basicamente', 'então' e 'qual o nome?', garanto que mantenho uma comunicação boa. <br/>Diferente das pessoas que trabalham na área de tecnologia, que se inspiram em nomes famosos como: Bill Gates, Jeff Bezos, e -de alguma forma- Steve Jobs, a minha inspiração é Linus Torvalds, criador do Kernel Linux, que faz os sistemas operacionais de vocês, membros do PAQ 2.0 que estão na INAITEC, rodarem. <br/>é um prazer estudar ao lado de vocês! Boa Noite!</b>",
  });

  console.log("Message sent: %s", info.messageId);
  

  
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);