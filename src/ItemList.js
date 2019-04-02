import React, { Component } from "react";
import Item from './Item';
import dbObj from './db.json';
import { add, remove } from './actions';
import { connect } from 'react-redux';

// console.log("dbObj = ", dbObj )

class ItemList extends Component {

    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem(taco) { 
        console.log('additem item??', taco)
        this.props.add(taco) 
    }
    removeItem(id) { this.props.remove(id) }

    render(){

        let items = dbObj.items.map(i => <Item  key={i.id}
                                                id={i.id}
                                                name={i.name}
                                                price={i.price}
                                                image_url={i.image_url}
                                                triggerAdd={this.addItem}
                                                triggerRemove={this.removeItem}
                                            />)

        return(
            <div className='ItemList'>
            {items}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    };
}

const mapDispatchToProps ={
    add,
    remove,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);