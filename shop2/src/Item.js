import React, {useState, useEffect} from 'react';

const Item=(props)=>{
    const [item,setItem]=useState(props.item);
    const [isCart,setIsCart]=useState(props.isCart);

    return <React.Fragment>
            <h1>{item.product_short_description}</h1>
            <img src={item.imageUrl[0]}/>
            <p>Price:{item.min_list_price}</p>
            {
                (isCart)?
                (<button>Remove</button>):
                (<button>Add to cart</button>)
            }
        </React.Fragment>
}

export default Item;