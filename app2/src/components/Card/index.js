import React from 'react'
import styles from './Card.module.scss'


console.log(styles);


export const Card = (props) => {
  const OnClickButton =()=>{
    alert(props.title)
  }

  const [isAdded,setisAdded] = React.useState(false)

  const OnClickPlus=()=>{
setisAdded(!isAdded)
  }


  return (
<div className={styles.card}>
        <div >
          <div className={styles.favorite}>
            <img src="./img/heardunliked.png" width={10} height={10} alt="" />
          </div>
          <img src="" alt="" />
          <h5>{props.title}</h5>
          <div>
            <div>
              <span>Price</span>
              <b>{props.price}</b>
            </div>
            <button className={styles.button} onClick={ OnClickButton} >
              <img width={100} height={100} src={props.imageUrl} alt="tv" />
          </button>
          <button className={styles.korzina}  >  
              <img width={20}  height={20} onClick={OnClickPlus} src={isAdded?  "./img/like.png" : "./img/btn-remove.png" } alt="tv" /> 
            </button>

          </div>
        </div>
  
     
  
    
  
     
          </div>
        
      
  )
}
