import Egg from "./egg";
const Hen=(props)=>{
    return (
        <>
        <h1>Hen </h1>
        <Egg name={props.name}/>
        </>
    )
}
export default Hen;