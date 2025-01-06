import Halfboil from "./halfboil";
const Egg=(props)=>{
    return ( 
        <>
        <h1>Egg : {props.name}</h1>
        <Halfboil name={props.name}/></>
    )
}
export default Egg;