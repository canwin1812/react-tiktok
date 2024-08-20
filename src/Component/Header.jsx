import React from 'react';

export default function Header(){
  return (
    <div className='Header'>
      <div className='header-content'>
        <div>
          <p>Logo</p>
        </div>
      </div>
      <div className='main-container'>
        <div className='Sidebar'>sidebar</div>
        <div className='Content'>content</div>
      </div>
    </div>
  )
}