import {WhatsappLogo, InstagramLogo, GithubLogo, Envelope} from '@phosphor-icons/react';
import './style.css'
export default function Contats() {
  return (
    <>
      <p style={{textAlign: 'center'}}>
        Gostaria de fazer um orçamento ou entrar em contato?
        <br /> <br />
        Você pode me contatar em uma das minhas redes sociais abaixo.
      </p>
      <ul className='list-socials'>
        <li className='item-list-socials'>
          <a href="http://wa.me/+5521964818546"><WhatsappLogo className='icons-socials'/></a>
        </li>
        <li className='item-list-socials'>
          <a href="https://www.instagram.com/cordtuvicdev/"><InstagramLogo className='icons-socials'/></a>
        </li>
        <li className='item-list-socials'>
          <a href="https://github.com/Tuviccfp"><GithubLogo className='icons-socials'/></a>
        </li>
        <li className='item-list-mail' data-tooltip='victorcordeirofp@gmail.com'>
          <a href=""><Envelope className='icons-socials'/></a>
        </li>
      </ul>
    </>
  );
}
