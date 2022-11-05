import React, { useState } from 'react'



function App () { return (

  <div className="wrapper">
    <div className="overlay">
      <div className="drawer">
        <div className="korzina">
          <h3>korzina</h3>
          <img
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
    </div>
  
    <header>
      <div className="headerleft">
        <img src="./img/logo.png" alt="" />
        <div className="headerinfo">
          <h3>React Snecaers</h3>
          <p>Shop Best Kross</p>
        </div>
      </div>
  
      <ul className="headerRight">
        <li>
          <span>400$</span>
          <img width={18} height={18} src="./img/korzina.png" alt="" />
        </li>
        <li>
          <img width={18} height={18} src="./img/user.png" alt="" />
        </li>
      </ul>
    </header>
  
    <div className="content">
      <div className="search">
        <h1>All Tv</h1>
        <div>
          <img width={40} height={40} src="./tv/search.png" alt="search" />
          <input placeholder="search" />
        </div>
      </div>
  
      <div className="TV">
        <div className="card">
          <div className="favorite">
            <img src="./img/heardunliked.png" width={10} height={10} alt="" />
          </div>
          <img src="" alt="" />
          <h5>Tv from Usa</h5>
          <div>
            <div>
              <span>Price</span>
              <b>400$</b>
            </div>
            <button className="button">
              <img width={80} height={80} src="./tv/tv.png" alt="tv" />
            </button>
          </div>
        </div>
  
        <div className="card">
          <img src="" alt="" />
          <h5>Tv from Usa</h5>
          <div>
            <div>
              <span>Price</span>
              <b>400$</b>
            </div>
            <button className="button">
              <img width={80} height={80}src="./tv/tv3.png" alt="tv" />
            </button>
          </div>
        </div>
  
        <div className="card">
          <img src="" alt="" />
          <h5>Tv from Usa</h5>
          <div>
            <div>
              <span>Price</span>
              <b>400$</b>
            </div>
            <button className="button">
              <img width={80} height={80} src="./tv/tv1.png" alt="tv" />
            </button>
          </div>
        </div>
  
        <div className="card">
          <img src="" alt="" />
          <h5>Tv from Usa</h5>
          <div>
            <div>
              <span>Price</span>
              <b>400$</b>
            </div>
            <button className="button">
              <img width={80} height={80} src="./tv/tv2.png" alt="tv" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  ) } export default App;
