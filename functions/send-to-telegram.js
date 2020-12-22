const axios = require('axios');

exports.handler = async (event, context) => {
  let baseURL = 'https://api.telegram.org/bot';
  let botToken = process.env.TELEGRAM_BOT_TOKEN;

  let message = `Kiriman dari lambda function
${Date.now().toString()}`;

  if (event.httpMethod === "POST") {
    let {
      full_name,
      address,
      age,
      phone_number,
      occupation
    } = JSON.parse(event.body)
    message = `Alhamdulillah, baru saja mendaftar

Nama: ${full_name}
Umur: ${age}
Alamat: ${address}
Nomor HP: ${phone_number}
Pekerjaan: ${occupation}`
  }

  let response = await axios
    .post(baseURL + botToken + '/sendMessage', {
      chat_id: process.env.TELEGRAM_GROUP_ID,
      text: message,
      parse_mode: "HTML"
    })

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: response.data.ok,
      tgram: {
        chat_id: process.env.TELEGRAM_GROUP_ID,
        message_id: response.data.result.message_id,
        text: message
      },
      event: event,
      context: context
    })
  }
}