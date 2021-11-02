/*export const post = async (url = '', data = {}) => {
    console.log(data)
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const f_respo = response.json()
    console.log(f_respo)
    return f_respo
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }*/
    /*.then(response => response.json())
    .catch(function(error) {
        alert(error);
    });*/
    /*.then(res => res.json())
    .then(function(res){
        document.getElementById('irony').innerHTML = res.polarity;
        document.getElementById('agreement').innerHTML = res.polarity_confidence;
        document.getElementById('score_tag').innerHTML = res.subjectivity;
        document.getElementById('subjectivity').innerHTML = res.subjectivity_confidence;
        console.log(res)
    })
    .catch(function(error) {
        alert(error);
    });
}*/

export const handleSubmit = async (e) => {
    e.preventDefault()
    const formText = document.getElementById('name').value
    await fetch('http://localhost:3000/result', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({formText})
    })
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`
        document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`
        document.getElementById('irony').innerHTML = `Irony: ${data.irony}`
        document.getElementById('score_tag').innerHTML = `Score Tag: ${data.score_tag}`
    })
}

/*console.log(formText)
    if(Client.is_url(formText)){
        post("http://localhost:3000/result", {text: formText}).then((data) => {
            document.getElementById("agreement").innerHTML = `Paynjkv = ${data.score_tag}`
            document.getElementById("irony").innerHTML = data.irony
            /*console.log(data)
            return data
        }).catch(error => console.log(error))
    }else{
        alert("Please try a valid URL.")
    }*/


