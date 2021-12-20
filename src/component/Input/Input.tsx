import Label from "./Label";
import { useCallback, useMemo } from "react";
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

    const type = useMemo(() => {
        switch (props.type) {
            case (InputTypes.EMAIL): {
                return "email";
            }
            case (InputTypes.PASSWORD): {
                return "password";

            }
            default: return "text"
        }
    }, [props.type])


    return (
        <div className={scss.inputContainer}>
            {props.labelText && (
                <Label text={props.labelText} for={props.for} />
            )}
            <input
                value={props.value}
                onChange={onChangeHandler}
                type={type}
                className={classNames(scss.input, { [scss.inputNotValid]: props.isNotValid !== undefined && props.isNotValid },{[scss.validInput]: (props.value.length >0 && !props.isNotValid)})}
                placeholder={props.placeholderText ? props.placeholderText : ""} />
        </div>
    )
}
export default Input;