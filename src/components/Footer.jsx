import tg from "../assets/img/logo-icons/Telegram.svg";
import insta from "../assets/img/logo-icons/Instagram.svg";
import Linkedin from "../assets/img/logo-icons/Linkedin.svg";
import gh from "../assets/img/logo-icons/GitHub.svg";
import mail from "../assets/img/logo-icons/Email.svg";
import logo from "../assets/img/logo-icons/{still.dev}.svg";

export default function Footer() {
  return (
    <div className="footer container">
      <div className="footer__inner">
        <a href="" className="footer__logo"><img src={logo} alt="" /></a>
        <div className="footer__socials container">
          <a target="_blank" href="https://t.me/akbarkhonov"><img src={tg} alt="" /></a>
          <a target="_blank" href="https://www.instagram.com/akbarkhanov_07/#"><img src={insta} alt="" /></a>
          <a target="_blank" href="https://www.linkedin.com/in/%D0%BB%D0%B0%D0%B7%D0%B8%D0%B7-%D0%B0%D0%BA%D0%B1%D0%B0%D1%80%D1%85%D0%BE%D0%BD%D0%BE%D0%B2-85abb0378/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BCU2GUI3uTXqVCvKEn3srsQ%3D%3D"><img src={Linkedin} alt="" /></a>
          <a target="_blank" href="https://github.com/laziz007-gpu"><img src={gh} alt="" /></a>
          <a target="_blank" mail="lazizakbarhonov7@gmail.com"><img src={mail} alt="" /></a>
        </div>
        <span>Спасибо что посетили мой сайт</span>
      </div>
    </div>
  )
}
