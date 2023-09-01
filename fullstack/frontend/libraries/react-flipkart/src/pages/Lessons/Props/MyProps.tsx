export let MyProps:React.FC<{}>=()=>{
    return <div>
        <h1>Props:</h1>
        <h3>Props are arguments passed into React components. Props are passed to components via HTML attributes. props stands for properties.</h3>
       {Check({a:"watch"})} 
       <Check a={"car"}/>
        </div> 
}

let Check:React.FC<{a:any}>=(props)=>{
    return <h2>{props.a}</h2>
}