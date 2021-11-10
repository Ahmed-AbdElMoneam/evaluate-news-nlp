/**
 * This is the function which will be executed after clicking submit. It takes the input of the text field and
 * uses it when trying to fetch the API. then, it shows the result(received data from API) on the view
 * @param {*} e 
 */
export const handleSubmit = async (e) => {
    e.preventDefault()
    // Making a sign to let user know that fetching data is pending
    document.getElementById('resultList').innerHTML = "Loading..."
    const formText = document.getElementById('name').value // Store input value
    // Checking the entered text if it is a URL or not
    if(Client.URLChecker(formText)){
        // If it is a URL, start fetching data
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
            // Here I will handle viewing the response into the view using vanilla javascript
            const uList = document.getElementById('resultList')
            uList.innerHTML = ""

            const agreement = document.createElement("li")
            agreement.innerText = `Agreement: ${data.agreement}`
            uList.append(agreement)

            const subjectivity = document.createElement("li")
            subjectivity.innerText = `Subjectivity: ${data.subjectivity}`
            uList.append(subjectivity)

            const confidence = document.createElement("li")
            confidence.innerText = `Confidence: ${data.confidence}`
            uList.append(confidence)

            const irony = document.createElement("li")
            irony.innerText = `Irony: ${data.irony}`
            uList.append(irony)

            const score_tag = document.createElement("li")
            score_tag.innerText = `Score Tag: ${data.score_tag}`
            uList.append(score_tag)
        })
    }else{
        alert("Please try a valid URL.") // If it isn't URL, show alert to the user to enter a valid URL
    }
}

