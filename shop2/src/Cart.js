import React, {useState, useEffect} from 'react'

import Item from './Item'

const Cart=(props)=>{
    const [items, setItems]=useState(props.items);

    useEffect(()=>{
        setItems(props.items)
    },[props])

    return <React.Fragment>
        <h1>Cart</h1>
        {
            items.map((item)=>{
                return <Item item={item} key={item.uniqueId} isCart={true}/>
            })
        }
    </React.Fragment>
}

export default Cart;