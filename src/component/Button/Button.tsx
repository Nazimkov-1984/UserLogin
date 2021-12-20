import classNames from "classnames";
import LoaderSpinner from "../Loader/Loader";


const scss = require("./Button.module.scss");

interface IProps {
    onClick:()=>void;
    isDisabled?: boolean | undefined;
    loginStatus?:boolean;
    timeOutLoader?:number;
}

const Button = (props: IProps) => {


    return (
        <button onClick= {props.onClick} className={classNames(scss.buttonSignIn, {[scss.buttonDisable]: props.isDisabled},{[scss.buttonHover]:!props.isDisabled})}>{!props.loginStatus && props.loginStatus !== undefined && props.timeOutLoader !==0 ?(
            <LoaderSpinner timeOut={props.timeOutLoader}/>
        ):"Sign in"}</button>
    )
}
export default Button;