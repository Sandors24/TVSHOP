import React from 'react'

export const Header = (props) => {
  return (
    
    <header>
    <div className="headerleft">
      <img src="./img/logo.png" alt="" />
      <div className="headerinfo">
        
        
        <h1>COCTAIL</h1>
      </div>
    </div>

    <ul className="headerRight">
      <li onClick={props.onClickCart}>
        <span>400$</span>
        <img width={18} height={18} src="./img/korzina.png" alt="" />
      </li>
      <li>
        <img width={18} height={18} src="./img/user.png" alt="" />
      </li>
    </ul>
  </header>


  )
}
