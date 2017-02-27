import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome home mother fucker!</h4>
    <img
      alt='This is a duck mother fucker, because Redux!'
      className='duck'
      src={DuckImage} />
  </div>
)

export default HomeView
