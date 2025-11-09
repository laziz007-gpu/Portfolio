import { useEffect, useState } from "react"
import tg from "../assets/img/logo-icons/Telegram.svg";
import insta from "../assets/img/logo-icons/Instagram.svg";
import Linkedin from "../assets/img/logo-icons/Linkedin.svg";
import gh from "../assets/img/logo-icons/GitHub.svg";
import mail from "../assets/img/logo-icons/Email.svg";


export default function Header() {

  const headers = [
    {text:'Разрабатываю современные интерфейсы', color: 'linear-gradient(233deg, #aa17e0 25.73%, #c72eff 96.63%)'},
    {text:'Сочетаю эстетику и производительность', color: 'linear-gradient(233deg, #aa17e0 25.73%, #00bfff 96.63%)'},
    {text:'Создаю решения, которые работают быстро', color: 'linear-gradient(233deg, #aa17e0 25.73%, #ff6b00 96.63%)'},
  ]

  const [index, setIndex] = useState(0)

  useEffect(() =>{
    const interval = setInterval(() => {
      setIndex((prev) => (prev+1)% headers.length);
    }, 2500)
    return() => clearInterval(interval);
  })


  return (
    <>
    <div className="header container">
      <div className="header__content ">
        <h1 className="header__content_title" key={headers[index].text} style={{ "--circle-color": headers[index].color }}>
          {headers[index].text}
        </h1>
      </div>
      <span className="socials">
        <p className="socials__text">&lt;span&gt;
        <a target="_blank" href="https://t.me/akbarkhonov"><img src={tg} alt="" /></a>
          <a target="_blank" href="https://www.instagram.com/akbarkhanov_07/#"><img src={insta} alt="" /></a>
          <a target="_blank" href="https://www.linkedin.com/in/%D0%BB%D0%B0%D0%B7%D0%B8%D0%B7-%D0%B0%D0%BA%D0%B1%D0%B0%D1%80%D1%85%D0%BE%D0%BD%D0%BE%D0%B2-85abb0378/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BCU2GUI3uTXqVCvKEn3srsQ%3D%3D"><img src={Linkedin} alt="" /></a>
          <a target="_blank" href="https://github.com/laziz007-gpu"><img src={gh} alt="" /></a>
          <a target="_blank" mail="lazizakbarhonov7@gmail.com"><img src={mail} alt="" /></a>
        &lt;/span&gt;</p>
      </span>
    </div>
    </>
  )
}
