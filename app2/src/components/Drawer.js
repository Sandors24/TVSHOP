import React from 'react'

export const Drawer = (props) => {
  return (
    <div className="drawer">
    <div className="korzina">
      <h3>korzina</h3>
      <img onClick={props.onClose}
        className="removebtn"
        src="./img/btn-remove.png"
        width={20}
        height={20}
        alt="remove"
      />
    </div>

    <div className="Items">
      <div className="CartItem">
        <img src="./tv/tv.png" width={80} height={80} alt="" />

        <div>
          <p>Shot Best Kross</p>
          <b>400$</b>
        </div>
        <img
          className="removebtn"
          src="./img/btn-remove.png"
          width={20}
          height={20}
          alt="remove"
        />
      </div>

      <div className="CartItem">
        <img src="./tv/tv.png" width={80} height={80} alt="" />

        <div>
          <p>Shot Best Kross</p>
          <b>400$</b>
        </div>
        <img
          className="removebtn"
          src="./img/btn-remove.png"
          width={20}
          height={20}
          alt="remove"
        />
      </div>

      <div className="CartTotalBlock">
        <ul>
          <li>
            <span>Itoqo</span>
            <div></div>
            <b>800$</b>
          </li>
          <li>
            <span>Naloq 5%</span>
            <div></div>
            <b>120</b>
          </li>
        </ul>
        <button>oformit zakaz</button>
      </div>
    </div>
  </div>

  )
}
