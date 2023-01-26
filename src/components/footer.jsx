import '../style/general.scss';
import whatsapp from '../images/whatsapp.svg';
import tiktok from '../images/tiktok.svg';
import youtube from '../images/youtube.svg';

function Footer(){
  return(
    <footer className='footer__container'>
      <a className='footer__links' href="https://api.whatsapp.com/send/?phone=573058579199&text=Hola%2C+estoy+interesad@+en+tus+ediciones.&type=phone_number&app_absent=0" target='_blank' rel='noreferrer'>
        <img className='footer__image' src={whatsapp} alt="whatsapp" />
      </a>

      <a className='footer__links' href="https://www.tiktok.com/@lesly_cuchivaque" target='_blank' rel='noreferrer'>
        <img className='footer__image' src={tiktok} alt="tiktok" />
      </a>

      <a className='footer__links' href="https://www.youtube.com/channel/UCktIQLpjLnQX4AePMqcPzhw" target='_blank' rel='noreferrer'>
        <img className='footer__image' src={youtube} alt="youtube" />
      </a>
    </footer>
  );
}

export default Footer;