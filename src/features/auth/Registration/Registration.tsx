import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {registerTC, setRegister} from "../../../Redux/registerReducer";
import {AppRootStateType} from "../../../Redux/store";
import {Navigate, NavLink} from "react-router-dom";
import s from './Registration.module.css';
import {setErrorAC} from "../../../Redux/appReducer";
import {PATH} from "../../../constants/routes";
import {EMPTY_STRING} from "../../../constants";
import {ReturnComponentType} from "../../../types";
import {Frame, Preloader, SuperButton, SuperInputPassword, SuperInputText} from "../../../ui";

export const Registration = (): ReturnComponentType => {

    const [email, setEmail] = useState<string>(EMPTY_STRING);
    const [password, setPassword] = useState<string>(EMPTY_STRING);
    const [confirmPassword, setConfirmPassword] = useState<string>(EMPTY_STRING);

    const isRegistered = useSelector<AppRootStateType, boolean>(state => state.register.isRegistered)
    const error = useSelector<AppRootStateType, string>(state => state.app.error)
    const loading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setRegister(false));
            dispatch(setErrorAC(EMPTY_STRING))
        }
    }, [])

    const onClickHandler = (): void => {
        if (password !== confirmPassword) {
            dispatch(setErrorAC('Password and confirmation password do not match'))
        } else {
            dispatch(registerTC(email, password))
        }
    }

    if (isRegistered) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <>
            {loading && <Preloader/>}
            <Frame>
                <span><strong>It-incubator</strong></span>
                <h2>Sign up</h2>
                {error && <div className={s.error}>{error}</div>}
                <div className={s.input}>
                    <label>
                        Email
                    </label>
                    <SuperInputText value={email} onChangeText={setEmail}/>
                </div>
                <div className={s.input}>
                    <label>
                        Password
                    </label>
                    <SuperInputPassword value={password} onChangeText={setPassword}/>
                </div>
                <div className={s.input}>
                    <label>
                        Confirm password
                    </label>
                    <SuperInputPassword value={confirmPassword} onChangeText={setConfirmPassword}/>
                </div>
                <SuperButton onClick={onClickHandler} style={{padding: '10px 60px'}}>Register</SuperButton>
                <p>
                    <NavLink to={PATH.LOGIN} className={s.linkLogin}>
                        <p className={s.signUpText}>To login</p>
                    </NavLink>
                </p>
            </Frame>
        </>
    );
};
