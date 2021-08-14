// import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('I was clicked!'); 
    }
    return (
        <header className='header'>
            <h1>Task Header</h1>
            <Button color ='green' text='Add' onClick={onClick}/>
        </header>
    )
}
Header.defaultProps ={
    title: 'Task Tracker',
}


export default Header
