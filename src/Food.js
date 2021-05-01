import React, { Component } from 'react'
export default class Food extends Component {

    constructor(){
        super()
        this.state={
            name:'Idly',
            price:30
        }
    }

    //handle the click event
    changeName=(item)=>{
        console.log("we are inside change name method")
        console.log(this.state.name)
//change the properties of state obj using - setState
        this.setState(
            {
            name:item
            }
        )
        //A normal JS object
        // this.state.name="Chapathi"
        // this.state.price=40
    }

    changePrice=(newPrice)=>{
        console.log('Inside Change price method')
        this.setState({
            price:newPrice
        })
    }   



    render() {
        return (
            <div>
                <div>{this.state.name}</div>
                <div>{this.state.price}</div>
                <button onClick={ ()=>this.changeName("Chapathi") }>Change Food</button>
                <button onClick={ ()=>this.changePrice(40)}>Change Price</button>
                We are inside Food Component
            </div>
        )
    }
}
rcc
