// Providing these two functions to webpack(babel-loader) by importing them here
import { URLChecker } from './js/URLChecker'
import { handleSubmit } from './js/formHandler'

// Also these Sass styles will be provided to webpack(style-loader, css-loader and sass-loader)
import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

export { 
    handleSubmit,
    URLChecker
}
