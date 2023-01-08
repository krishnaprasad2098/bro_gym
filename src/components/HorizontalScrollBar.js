import details from '../data/details.json'
import React from 'react'


const HorizontalScrollBar = () => {
  return (
    <div>
        {
            details.map(item => {
                return (
                    <div className="" key={item.id}>
                        <img src={item.imgPath} key={item.imgPath} alt="meaning" />
                        <p key={item.id}>{item.title}</p>
                    </div>

                )
            })
        }
        
    </div>
    
  )
}

export default HorizontalScrollBar