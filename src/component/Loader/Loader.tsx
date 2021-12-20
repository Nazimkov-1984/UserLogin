import Loader from "react-loader-spinner";

interface IProps{
    timeOut:number | undefined;
}
const LoaderSpinner =(props:IProps)=> {
    console.log(props.timeOut);
    return (
        <Loader
          type="Bars"
          color="#FFFFFF"
          height={20}
          width={20}
          timeout={props.timeOut} 
        />
      );  
}

export default LoaderSpinner;