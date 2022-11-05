import React from 'react'

export const Drawer = () => {
  return (
    <div>
    <div className='drawer'>
    <div className='korzina'>
    <h3>korzina</h3>
    <img className='removebtn' src="./img/btn-remove.png" width={20} height={20} alt="remove" />
    </div>

    <div className='Items'>

    <div className='CartItem'>
      <img src="./tv/tv.png" width={80} height={80} alt="" />


      <div>
        <p>Shot Best Kross</p>
        <b>400$</b>
      </div>
      <img className='removebtn' src="./img/btn-remove.png" width={20} height={20} alt="remove" />
    </div>
   
    <div className='CartItem'>


      <img src="./tv/tv.png" width={80} height={80} alt="" />


      <div>
        <p>Shot Best Kross</p>
        <b>400$</b>
      </div>
      <img className='removebtn' src="./img/btn-remove.png" width={20} height={20} alt="remove" />
    </div>
    </div>
    </div>
    </div>
  )
}
