function Pizza(props){ // props [ receive the data]

console.log(props)
// { topping:'chicken', cheese:'double' }
//panner -> trying to change to panner
//props.topping="Chicken" //this will not work [ props is read_only]
//Javascript code
//let topping="Panner"

//JSX code
  return ( 
    <div>
        <div> topping - {props.topping}</div>
        <div> cheese - {props.cheese}</div>
        <div>We are inside Pizza component</div>
    </div>
  )


}

export default Pizza