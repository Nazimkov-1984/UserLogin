import Label from "./Label";
import {useCallback} from "react";
import classNames from "classnames";

const scss = require("./Input.module.scss");

export enum InputTypes {
    PASSWORD = "PASSWORD",
    EMAIL = "EMAIL;"
}

interface IProps {
    value: string;
    type: InputTypes
    labelText: string;
    for: string;
    onChange: (text?: string, event?: any) => void;
    placeholderText?: string;
    isNotValid?: boolean;
}

const Input = (props: IProps) => {

    const onChangeHandler = useCallback((event) => {
        props?.onChange(event?.target?.value, event);
    }, [props]);

    console.log(props.isNotValid);

    return (
        <div className={scss.inputContainer}>
            {props.labelText && (
                <Label text={props.labelText} for={props.for}/>
            )}
            <input
                value={props.value}
                onChange={onChangeHandler}
                type={props.type === InputTypes.EMAIL ? "email" : "text"}
                className={classNames(scss.input, {[scss.inputNotValid]: props.isNotValid !== undefined && props.isNotValid})}
                placeholder={props.placeholderText ? props.placeholderText : ""}/>
        </div>
    )
}
export default Input;