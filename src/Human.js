//ES6 [JavaScript ]
//1st  way 
//import {Component} from 'react'
//2nd way
const { Component } = require("react");


//convert our class to component
class Human extends Component{

  
    constructor(props){
        super(props) //1st line , 
//we want create obj of super class before subclass 
//becoz we have to access all the props and method inside subclass
    
        //props.heart=2 //throws error
}

    


    //method overriding 
    render() // method definition
   //method implementation
    {
            return( <div>
                  heart: { this.props.heart}
                  <br/>
                We are inside Human Component
            </div>)
    }

} 
export default Human


