import React, { Component } from "react";
import Item from './Item';
import dbObj from './db.json';
import { add, remove } from './actions';
import { connect } from 'react-redux';

// console.log("dbObj = ", dbObj )

class ItemList extends Component {


    render(){

        let items = dbObj.items.map(i => <Item  key={i.id}
                                                id={i.id}
                                                name={i.name}
                                                price={i.price}
                                                image_url={i.image_url}
                                                triggerAdd={this.props.add}
                                                triggerRemove={this.props.remove}
                                            />)

        console.log("cart and totalItems", this.props.cart, this.props.totalItems);
        return(
            <div>Total Items: {this.props.totalItems} 
            <div className='ItemList'>
            {items}
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
        totalItems: state.totalItems
    };
}

const mapDispatchToProps = {
    add,
    remove,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);