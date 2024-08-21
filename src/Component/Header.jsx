import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

export default function Header(props){

  return (
    <div className='header-container'>
      <div className='header'>
        <div className='logo'>
          <p>Logo</p>
        </div>
        <div className='search-input'>
        </div>
        <div className='contification-button'></div>
        <div className='profile'></div>
      </div>
      </div>
      
  )
}