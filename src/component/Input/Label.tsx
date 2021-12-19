interface IProps {
    text: string;
    for: string
}

const scss = require("./Label.module.scss");

const Label = (props: IProps) => {
    return (
        <label className={scss.inputLabel} htmlFor={props.for}>{props.text}</label>
    )
}
export default Label;