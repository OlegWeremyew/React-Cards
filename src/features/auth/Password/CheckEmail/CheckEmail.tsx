import React from 'react';
import email2 from '../../../../assets/images/email2.png';
import styles from './CheckEmail.module.css';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../Redux/store";
import {Frame} from "../../../../ui/common/Frame/Frame";
import {ReturnComponentType} from "../../../../types";


export const CheckEmail = (): ReturnComponentType => {
    const emailName = useSelector<AppRootStateType, string>(state => state.recovery.email);

    return (
        <Frame>
            <img src={email2} alt="email"/>
            <h2>Check Email</h2>
            <p>We've sent an Email with instructions to <span className={styles.text}>{emailName}</span></p>
        </Frame>
    );
};
