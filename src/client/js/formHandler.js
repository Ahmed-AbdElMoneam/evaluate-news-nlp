const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export const handleSubmit = async (e) => {
    /**
     * TODO
     *  - Get Value of the input for URL
     *  - Check if it's URL or not
     *      yes
     *          send it to the backend
     *      no
     *          show user message it's not valid URL
     */
    e.preventDefault()
    const formText = document.getElementById('name').value
    if(Client.is_url(formText)){
        post("http://localhost:8081/result", {formText}).then(data => {
            document.getElementById(agreement).innerText = data.agreement
        })
    }else{
        alert("Please try a valid URL.")
    }
}

//export default handleSubmit
