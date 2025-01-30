'use client';

import styles from './Header.module.sass';
import logo from '@icons/logo.png';
import commentImg from '@icons/header/comment.svg'
import userImg from '@icons/header/user.svg';
import menuImg from '@icons/header/menu.svg';
import searchImg from '@icons/search.svg';

import Image from "next/image";
import Lang from "@containers/Content/Lang/Lang";
import Link from "next/link";
import classNames from "classnames";
import Menu from "@containers/Header/Menu/Menu";
import {useEffect, useState} from "react";
import SearchMenu from "@containers/Header/SearchMenu/SearchMenu";
import {disableIosTextFieldZoom} from "@utils/helpers/deviceHook";

const Header = () => {
    const menuItems = ['menu', 'search'];
    const [visibleMenu, setVisibleMenu] = useState(null);
    const closeMenu = () => setVisibleMenu(false);

    useEffect(() => {
        if(visibleMenu){
            document.body.position = 'fixed';
            document.body.style.overflow = 'hidden';
        } else {
            document.body.position = '';
            document.body.style.overflow = '';
        }
    }, [visibleMenu]);

    useEffect(() => {
        const checkIsIOS = () =>
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        if (checkIsIOS()) {
            disableIosTextFieldZoom();
        }
    }, []);

    return (
        <div className={classNames("container", styles.container)}>
            <div className="wrapper">
                <div className={styles.block}>
                    <div className={styles.logoBlock}>
                        <Link href="/">
                            <Image src={logo} alt="logo" priority
                                   className={styles.logo}
                            />
                        </Link>
                    </div>
                    <div className={classNames(styles.rightPart, 'medium')}>
                        <div className={styles.langs}>
                            <Lang/>
                        </div>
                        <Link href="/" className={classNames(styles.navItem, styles.chat)}>
                            <div className={styles.imageWrapper}>
                                <Image src={commentImg} alt="chat" priority className={styles.navImage}/>
                            </div>
                            <div className={styles.navTitle}>Чат</div>
                        </Link>
                        <Link href="/" className={classNames(styles.navItem, styles.profile)}>
                            <div className={styles.imageWrapper}>
                                <Image src={userImg} alt="profile" priority className={styles.navImage}/>
                            </div>
                            <div className={styles.navTitle}>Мій профіль</div>
                        </Link>
                        <button className={classNames(styles.button, 'semi-bold')}>Додати оголошення</button>
                        <div className={styles.mobileItems}>
                            <div className={styles.mobileItem} onClick={() => setVisibleMenu('search')}>
                                <div className={styles.mobileImgWrapper}>
                                    <Image src={searchImg} alt="search" priority />
                                </div>
                            </div>
                            <Link href="/" className={styles.mobileItem}>
                                <div className={styles.mobileImgWrapper}>
                                    <Image src={commentImg} alt="chat" priority />
                                </div>
                            </Link>
                            <Link href="/" className={styles.mobileItem}>
                                <div className={styles.mobileImgWrapper}>
                                    <Image src={userImg} alt="profile" priority />
                                </div>
                            </Link>
                        </div>
                        <div className={styles.menu} onClick={() => setVisibleMenu('menu')}>
                            <Image src={menuImg} alt="menu" priority/>
                        </div>
                    </div>
                </div>
            </div>
            <Menu isVisible={visibleMenu === 'menu'} closeMenu={closeMenu} />
            <SearchMenu isVisible={visibleMenu === 'search'} closeMenu={closeMenu} />
        </div>
    );
}

export default Header;