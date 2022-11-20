import React, { useState } from 'react'
import {Drawer} from "./components/Drawer"
import {Card} from "./components/Card"
import {Header} from "./components/Header"

const arr =[{title:"sony",price:"400$",imageUrl:"./tv/tv.png", img:"./img/btn-remove.png" },
{title:" samsung",price:"600$",imageUrl:"./tv/tv1.png" , img:"./img/btn-remove.png" },
{title:"lg",price:"800$",imageUrl:"./tv/tv2.png",img:"./img/btn-remove.png", },
{title:"panasonic",price:"200$",imageUrl:"./tv/tv3.png" ,img:"./img/btn-remove.png" }

]



function App () { 
  
  const [cartOpened,setCartOpened]=React.useState(false)
  
  return (

  <div className="wrapper">

    
   {cartOpened ?<Drawer onClose={()=>setCartOpened(false)} />: null}
    <Header onClickCart ={()=>setCartOpened(true)} />
    
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
  
 
    <div className="content">
      <div className="search">
        <h1>All Tv</h1>
        <div>
          <img width={40} height={40} src="./tv/search.png" alt="search" />
          <input placeholder="search" />
        </div>
      </div>
      </div>
  
  


  <div>
    {arr.map((obj)=>(
     <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} img={obj.img}/>
    ))}
    <Card title="200" />

  

  </div>
  </div>
  
  
  ) } export default App;

