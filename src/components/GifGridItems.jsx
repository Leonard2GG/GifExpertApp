import React from 'react'

export const GifGridItems= ({title, url}) => {
  
    return (
    <div className="card animate__animated animate__fadeInDown">
        <img src= { url } alt={ title } />
        <p>{title}</p>
    </div>
  )
}

