import PropTypes from 'prop-types'
// import { MouseEventHandler } from 'react'
// import { MouseEventHandler } from 'react's
const Button = ({color, text, textColor, onClick}) =>{
    return <button onClick= {onClick} style={{background: color, color: textColor}} className='btn'>{text}</button>
}

// Button.defaultProps ={
//     color: 'steelblue'
// }
// Button.propTypes ={
//     color: PropTypes.string,
//     text: PropTypes.string,
//     textColor: PropTypes.string,
//     onClick: PropTypes.func
// }
    
export default Button