import { useState } from "react"

export default function Contacts() {
 
  const aboutInfo = {
    name: 'Акбархонов Лазиз Азизхонович',
    tel: '+998 93 321 05 80',
    username: '@akbarkhonov',
    email: 'lazizakbarhonov7@gmail.com'
  }
   
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [nickname, setNickname] = useState("");
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Форма отправлена!', { name, number, nickname });
    setLoading(true);
    setMessage("");

    try {
      const responce = await fetch('http://localhost:3001/api/send-telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, number, nickname})
      });

      const data = await responce.json();

      if (data.success) {
        setMessage("✅ Форма отправлено!");
        setName('');
        setNumber('');
        setNickname('');
      } else {
        setMessage("❌ Ошибка отправки");
      }
    } catch(error){
      console.error('Ошибка:', error);
      setMessage("❌ Ошибка соединения")
    } finally{
      setLoading(false)
    }
  }

  return (
    <div className="contact container">
      <h2 className="title">Связаться</h2>
      <div className="contact__inner">
        <div className="contact__left">
         <div className="contact__left_item">
          <h3 className="contact__item_title">Ф.И.О.</h3>
          <p className="contact__item_text">{aboutInfo.name}</p>
         </div>
         <div className="contact__left_item">
          <h3 className="contact__item_title">Номер телефона</h3>
          <p className="contact__item_text">{aboutInfo.tel}</p>
         </div>
         <div className="contact__left_item">
          <h3 className="contact__item_title">Телеграм</h3>
          <p className="contact__item_text">{aboutInfo.username}</p>
         </div>
         <div className="contact__left_item">
          <h3 className="contact__item_title">Почта</h3>
          <p className="contact__item_text">{aboutInfo.email}</p>
         </div>
        </div>
        <div className="contact__right">
         <h3 className="contact__right_title">Оставьте свой контакт </h3>
         <span>обсудим идею или сотрудничество.</span>
         <form className="contact__right_form" onSubmit={handleSubmit}>
          <input value={name} type="text" placeholder="Ф.И.О." onChange={(e) => setName(e.target.value)}/>
          <input value={number} placeholder="Номер телефона" onChange={(e) => setNumber(e.target.value)}/>
          <input value={nickname} type="text" placeholder="Телеграм никнейм" onChange={(e) => setNickname(e.target.value)}/>

          <button className="contact__btn" disabled={loading} type="submit">{loading ? 'Отправка...' : 'Отправить'}</button>
          {message && <p style={{marginTop: '10px', textAlign: 'center', color: 'white', fontFamily: 'Helvetica'}}>{message}</p>}
         </form>
      </div>
      </div>
    </div>
  )
}
