import classNames from "classnames";

const scss = require("./Button.module.scss");

interface IProps {
    isDisabled?: boolean | undefined;
}

const Button = (props: IProps) => {
    return (
        <button className={classNames(scss.buttonSignIn, {[scss.buttonDisable]: props.isDisabled})}>Sign in</button>
    )
}
export default Button;