import React, { Component } from "react";
import './Item.css'
// console.log("dbObj = ", dbObj )

class Item extends Component {

    render(){
        return(
            <div className='Item'>
            <div classname='Item-detail'>
            <br/>
                <b> Item: {this.props.name}</b>
                <b> Price: ${this.props.price}</b>
            </div>
                <img src={this.props.image_url} alt=''></img>
            <div>   
                <button onClick={this.props.Add}> Add to Cart </button>
                <button onClick={this.props.Remove}> Remove from Cart </button>
            </div>
            </div>
        )
    }
}



export default Item;