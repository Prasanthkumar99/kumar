import React, {useState, useEffect} from 'react'
import Item from './Item';

const Catalog=(props)=>{
    const [items, setItems]=useState(props.items);

    useEffect(()=>{
        setItems(props.items)
    },[props])

    return <React.Fragment>
        <h1>Catalog</h1>
        {
            items.map((item)=>{
                return <Item item={item} key={item.uniqueId} isCart={false}/>
            })
        }
    </React.Fragment>
}

export default Catalog;