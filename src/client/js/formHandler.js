const axios = require('axios')


async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    console.log(formText);
    if (!!formText) {
        console.log("::: Form Submitted :::")

        const response = await axios({
            method: 'post',
            url: 'http://localhost:5000/nlp',
            data: {
                "text": formText
            }
        })

        console.log(response);
        document.getElementById('polarity').innerHTML = 'Polarity: ' + response.data.score_tag;
        document.getElementById("agreement").innerHTML = `Agreement: ${response.data.agreement}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${response.data.subjectivity}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${response.data.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${response.data.irony}`;

    } else {
        alert('That was an Invalid URL input, try again');
    }
}


export { handleSubmit }