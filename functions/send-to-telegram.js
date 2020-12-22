const axios = require('axios');

exports.handler = async (event, context) => {
  let baseURL = 'https://api.telegram.org/bot';
  let botToken = process.env.TELEGRAM_BOT_TOKEN;

  console.log({env: process.env})

  let date = new Date();
  let message = "Kiriman dari lambda function " + Date.now().toString();
  let response = await axios
    .post(baseURL + botToken + '/sendMessage', {
      chat_id: process.env.TELEGRAM_GROUP_ID,
      text: message
    })

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: response.data.ok,
      event: event,
      context: context
    })
  }
}