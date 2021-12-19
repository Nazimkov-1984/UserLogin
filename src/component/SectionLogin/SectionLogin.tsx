import MergeLogo from "../MergeLogo/MergeLogo";
import Input, {InputTypes} from "../Input/Input";
import Button from "../Button/Button";
import {useCallback, useState} from "react";

const scss = require("./SectionLogin.module.scss");
const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

const SectionLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(false);
    const [isNotEmpty, setIsNotEmpty] = useState<boolean>(false)

    const onChangeEmailInput = useCallback((email) => {
        setEmail(email);
        setIsValid(!reg.test(email));
    }, []);

    const onChangePasswordInput = useCallback((password) => {
        setPassword(password);
        setIsNotEmpty(password.length < 3)
    }, []);
    console.log(email.length === 0);

    return (
        <div className={scss.sectionLoginWrapper}>
            <MergeLogo/>
            <div className={scss.loginForm}>
                <h2 className={scss.title}>Sign in</h2>
                <div className={scss.containerLinkSign}>
                    <span className={scss.text}>Don't have an account?</span>
                    <a href="/" className={scss.linkToSign}>Sign in now</a>
                </div>
                <div className={scss.containerInputs}>
                    <Input type={InputTypes.EMAIL} labelText={"Email"} for={"inputEmail"} value={email}
                           onChange={onChangeEmailInput} isNotValid={isValid}/>
                    <Input type={InputTypes.PASSWORD} labelText={"Password"} for={"inputPassword"} value={password}
                           placeholderText={"Forgot your password?"} isNotValid={isNotEmpty}
                           onChange={onChangePasswordInput}/>
                </div>
                <Button isDisabled={email.length === 0 ? true : isNotEmpty && isValid}/>
            </div>
            <div className={scss.credential}>
                <a className={scss.linkToCredential} target={"_blank"} href="/">Contact</a>
                <a className={scss.linkToCredential} target={"_blank"} href="/">Privacy</a>
                <a className={scss.linkToCredential} target={"_blank"} href="/">Terms</a>
            </div>
        </div>
    )
}
export default SectionLogin;