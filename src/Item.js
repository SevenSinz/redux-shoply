import React, { Component } from "react";
import './Item.css'
// console.log("dbObj = ", dbObj )


class Item extends Component {

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

    }

    handleAdd(e) {
        let i = {
            id: this.props.id,
            name: this.props.name,
            price: this.props.price,
            image_url: this.props.image_url
        }
        this.props.triggerAdd(i);
    }

    handleRemove(e) {
        this.props.triggerRemove(this.props.id);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render(){
        return(
            <div className='Item'>
            <div className='Item-detail'>
            <br/>
                <b> Item: {this.props.name}</b>
                <b> Price: ${this.props.price}</b>
            </div>
                <img src={this.props.image_url} alt=''></img>
            <div>   
                
                <button onClick={this.props.triggerAdd}> Add to Cart </button>
                <button onClick={this.props.triggerRemove}> Remove from Cart </button>
            </div>
            </div>
        )
    }
}



export default Item;