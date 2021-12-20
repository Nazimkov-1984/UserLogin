import MergeLogo from "../MergeLogo/MergeLogo";
import Input, { InputTypes } from "../Input/Input";
import Button from "../Button/Button";
import { useCallback, useState, useMemo } from "react";
import { sendUserLoginData } from "../../services/sendUserDataLogin";
import { IUserDataPayload } from "../../services/sendUserDataLogin";


const scss = require("./SectionLogin.module.scss");
const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

const SectionLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(false);
    const [isNotEmpty, setIsNotEmpty] = useState<boolean>(false)
    const [loginStatus, setLoginStatus] = useState<boolean>();
    const [time, setTime] = useState<number>(3000);

    const onChangeEmailInput = useCallback((email) => {
        setEmail(email);
        setIsValid(!reg.test(email));
    }, []);

    const onChangePasswordInput = useCallback((password) => {
        setPassword(password);
        setIsNotEmpty(password.length < 3)
    }, []);

    const isDisabledButton = useMemo(() => {
        if (email.length === 0 || password.length === 0) {
            return true;
        } else {
            return (isNotEmpty || isValid);
        }
    }, [email.length, isNotEmpty, isValid, password.length])

    const onSubmitLoginData = useCallback(() => {
        const payload: IUserDataPayload = {
            userEmail: email,
            userPassword: password
        };

        sendUserLoginData(payload).then(res => {
            setLoginStatus(res.status === 200);
        }).catch(error => {
            if (error.response.status !== 500) {
                setLoginStatus(false);
                setTimeout(() => {
                    setTime(0);
                }, 3000)
            }
        })
    }, [email, password]);

    return (
        <div className={scss.sectionLoginWrapper}>
            <MergeLogo />
            <div className={scss.loginForm}>
                <h2 className={scss.title}>Sign in</h2>
                <div className={scss.containerLinkSign}>
                    <span className={scss.text}>Don't have an account?</span>
                    <a href="/" className={scss.linkToSign}>Sign in now</a>
                </div>
                <div className={scss.containerInputs}>
                    <Input type={InputTypes.EMAIL} labelText={"Email"} for={"inputEmail"} value={email}
                        onChange={onChangeEmailInput} isNotValid={isValid} />
                    <Input type={InputTypes.PASSWORD} labelText={"Password"} for={"inputPassword"} value={password}
                        placeholderText={"Forgot your password?"} isNotValid={isNotEmpty}
                        onChange={onChangePasswordInput} />
                </div>
                <Button isDisabled={isDisabledButton} onClick={onSubmitLoginData} loginStatus={loginStatus} timeOutLoader={time} />
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