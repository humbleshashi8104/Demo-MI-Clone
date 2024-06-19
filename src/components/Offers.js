import React from 'react'
import '../styles/Offers.css'

const Offers = ({offers}) => {
  return (
    <div className="offersSection">
        {
            offers.map((item,index)=>(
                <a href={item.url}>
                    <img src={item.image} alt={`${index} offer`} />
                </a>
            ))
            // offers.forEach(element => {
            //     <a href={element.url}>
            //         <img src={element.image} alt={`offer`} />
            //     </a>
            // })
            
        }
    </div>
  )
}

export default Offers