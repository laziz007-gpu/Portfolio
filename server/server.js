const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const BOT_TOKEN = '8269849819:AAFWubEyDJaMrsc8mFZYlE4frxWPwiLMlLg';
const CHAT_ID = '5382176553';

app.post('/api/send-telegram', async (req, res) => {
    const {name, number, nickname} = req.body;

    const message = `
       🔔 Новая заявка с сайта!

       👤 Имя: ${name}
       📱 Телефон: ${number}
       💬 Telegram: ${nickname}
    `;

    try{
       await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
       chat_id: CHAT_ID,
       text: message
    }, {
    headers: {
    'Content-Type': 'application/json'
    }
});
       console.log('✅ Сообщение отправлено в Telegram');
       res.json({success: true, message: 'Отправлено'})
    } catch (error){
       console.error('❌ Ошибка:', error);
       res.status(500).json({success: false, message: 'Ошибка отправки'});
    }
});

app.listen(3001, () => {
    console.log('🚀 Сервер запущен на http://localhost:3001');
});