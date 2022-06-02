import React, {useEffect, useState} from 'react';
import styles from './login.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/store";
import {Navigate, NavLink} from "react-router-dom"
import {ReturnComponentType} from "../../../types";
import {EMPTY_STRING} from "../../../constants";
import {PATH} from "../../../constants/routes";
import {Frame, Preloader, SuperButton, SuperCheckbox, SuperInputPassword, SuperInputText} from "../../../ui";
import {AppAction} from "../../../Redux/appReducer";
import {loginTC} from "../../../Redux/loginReducer";

export const Login = (): ReturnComponentType => {
    const [email, setEmail] = useState<string>(EMPTY_STRING);
    const [password, setPassword] = useState<string>(EMPTY_STRING);
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const loginStatus = useSelector<AppRootStateType, boolean>(state => state.login.status);
    const loading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);
    const error = useSelector<AppRootStateType, string>(state => state.app.error);
    const dispatch = useDispatch();

    const loginHandler = (): void => {
        dispatch(loginTC(email, password, rememberMe));
    };

    useEffect(() => {
        dispatch(AppAction.setErrorAC(EMPTY_STRING))
    }, [])

    if (loginStatus) {
        return <Navigate to={PATH.PROFILE}/>
    }

    return (
        <>
            {loading && <Preloader/>}
            <Frame>
                <span><strong>It-incubator</strong></span>
                <h2>Sign In</h2>
                {error && <div className={styles.error}>{error}</div>}
                <div className={styles.input}>
                    <label>
                        Email
                    </label>
                    <SuperInputText error={error}
                                    value={email}
                                    onChange={e => setEmail(e.currentTarget.value)}
                    />
                </div>
                <div className={styles.input}>
                    <label>
                        Password
                    </label>
                    <SuperInputPassword error={error}
                                        value={password}
                                        onChange={e => setPassword(e.currentTarget.value)}
                    />
                </div>
                <div className={styles.containerCheckbox}>
                    <SuperCheckbox checked={rememberMe}
                                   onChange={() => setRememberMe(!rememberMe)}/>
                    <p>Remember me</p>
                </div>
                <p className={styles.forgotText}>
                    <NavLink to={PATH.FORGOT_YOUR_PASSWORD} className={styles.linkLogin}>Forgot Password</NavLink>
                </p>
                <SuperButton onClick={loginHandler} style={{padding: '10px 60px'}}>Login</SuperButton>
                <p>Don’t have an account?</p>
                <NavLink to={PATH.REGISTRATION} className={styles.linkLogin}>
                    <p className={styles.signUpText}>Sign Up</p>
                </NavLink>
            </Frame>
        </>
    );
};