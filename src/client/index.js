import { is_url } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

//console.log(is_url);
//alert("I EXIST")
//console.log("CHANGE!!");

/*window.addEventListener("DOMContentLoaded", () => {
    const buttonSubmit = document.getElementById("btn-submit")
    buttonSubmit.addEventListener("click",(e) => {
        handleSubmit(e)
    })
})*/

export { 
    handleSubmit,
    is_url
}
