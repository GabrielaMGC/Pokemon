import React from "react"

const CartaPokemon =({id, name, image, type})=>{
    const style = type+" thumb-container"
    return(
        <>
                <div className={style}>
                    <div className="number">
                        <small>#0 {id}</small>
                    </div>
                    <img src={image} alt={name}/>
                    <div className="detail-wrapper">
                        <h1>{name}</h1>
                        <small>Type: {type}</small>
                    </div>
                </div>
        </>
    )
}
export default CartaPokemon;