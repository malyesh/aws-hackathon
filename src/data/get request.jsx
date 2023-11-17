const axios = require('axios');

const options = {
    method: 'POST',
    url: 'https://chatgpt-best-price.p.rapidapi.com/v1/chat/completions',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '3742fd7577msh2de1990ea10bdf3p1a8845jsnbf211dcc4d2b',
        'X-RapidAPI-Host': 'chatgpt-best-price.p.rapidapi.com'
    },
    data: {
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user',
                content: 'please write me a json object with a few values so I know how to format a get request to you?'
            } // this is where we have to put the sentence that we query for the json with
        ]
    }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}