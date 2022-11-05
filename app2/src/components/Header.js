import React from 'react'

export const Header = () => {
  return (
    
<div>
<div className='headerleft'>
  <img src="./img/logo.png" alt="" />
  <div className='headerinfo'>
    <h3>React Snecaers</h3>
    <p>Shop Best Kross</p>
  </div>
  </div>

  <ul className='headerRight'>
    <li>

     <span>400$</span>
     <img width={18} height={18}  src="./img/korzina.png" alt="" />
    </li>
    <li>
      <img width={18} height={18} src="./img/user.png" alt="" />
    </li>
  </ul>
</div>


  )
}
