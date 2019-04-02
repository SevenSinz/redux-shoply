import React, { Component } from "react";
import Item from './Item';
import dbObj from './db.json';

// console.log("dbObj = ", dbObj )

class ItemList extends Component {

    render(){

        let items = dbObj.items.map(i => <Item  key={i.id}
                                                id={i.id}
                                                name={i.name}
                                                price={i.price}
                                                image_url={i.image_url}
                                            />)

        return(
            <div className='ItemList'>
            {items}
            </div>
        )
    }
}



export default ItemList;