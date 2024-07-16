import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts'
import { GifGridItems } from './GifGridItems'


export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifts(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__falsh">Cargando...</p> }
            <div className='card-grid '> 
                {
                    images.map(img=>(
                        <GifGridItems
                        key={img.id} 
                        {...img}
                        />
                    ))
                }
                
            </div>
        </>
    )
}
