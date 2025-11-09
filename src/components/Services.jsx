import pic1 from "../assets/img/pictures/pic1.png"
import pic2 from "../assets/img/pictures/pic2.png"
import pic3 from "../assets/img/pictures/pic3.png"
import pic4 from "../assets/img/pictures/pic4.png"
import pic5 from "../assets/img/pictures/pic5.png"
import pic6 from "../assets/img/pictures/pic6.png"
import pic7 from "../assets/img/pictures/pic7.png"


export default function Services() {

  const services = [
    {name: 'Верстка сайтов по макету', img: pic1},
    {name: 'Разработка лендингов под ключ', img: pic2},
    {name: 'Создание дизайнов под верстку', img: pic3},
    {name: 'Создание дизайнов под верстку', img: pic4},
    {name: 'Добавление новых секций и функционала', img: pic5},
    {name: 'Настройка и публикация сайта', img: pic6},
    {name: 'Branding', img: pic7},
  ]
   
  return (
    <div className="services container" id="services">
      <h2 className="title">Услуги</h2>
      <div className="services__inner">
         {
          services.map((item, i) => (
            <div className="service" key={i}>
              <h3 className="service__title">{item.name}</h3>
              <img src={item.img} alt="" />
            </div>
          ))
         }
      </div>
    </div>
  )
}
