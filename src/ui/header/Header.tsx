import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css';
import profileIcon from '../../assets/images/Profile.svg';
import packsListIcon from '../../assets/images/Packs.svg';
import {useDispatch} from "react-redux";
import {PATH} from "../../constants/routes";
import {ReturnComponentType} from "../../types";
import {logoutTC} from "../../Redux/loginReducer";

export const Header = (): ReturnComponentType => {
    const dispatch = useDispatch();
    const logOutHandler = () => {
        dispatch(logoutTC())
    }

    return (
        <header className={styles.header}>
            <nav>
                <NavLink to={PATH.PACKS} className={(navData) => navData.isActive ? styles.isActive : ""}>
                    <div className={styles.packsLink}><img src={packsListIcon}
                                                           alt={'packsListIcon'}/><span>Packs list</span></div>
                </NavLink>
                <NavLink to={PATH.PROFILE} className={(navData) => navData.isActive ? styles.isActive : ""}>
                    <div className={styles.profileLink}><img src={profileIcon} alt={'profileIcon'}/><span>Profile</span>
                    </div>
                </NavLink>
                <div className={styles.btnLogoutContainer}>
                    <button className={styles.btnLogout} onClick={logOutHandler}>Log Out</button>
                </div>
            </nav>
        </header>
    )
};

export default Header;