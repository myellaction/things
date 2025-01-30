import styles from './MenuContainer.module.sass';
import classNames from "classnames";
import Image from "next/image";
import logoImg from "@icons/mobile-logo.png";
import closeImg from "@icons/menu/cross.svg";
import {useEffect} from "react";
import MiddleFooter from "@containers/Footer/MiddleFooter/MiddleFooter";
import BottomFooter from "@containers/Footer/BottomFooter/BottomFooter";

const MenuContainer = ({title="Меню", isVisible, closeMenu, headerBorder=null, children}) => {

    return (
        <>
            <div className={classNames(styles.block, {[styles.block_active]: isVisible})}>
                <div className={classNames(styles.wrapper, {[styles.headerBorder]: headerBorder})}>
                    <div className={styles.header}>
                        <Image src={logoImg} alt="logo" className={styles.logo}/>
                        <div className={styles.rightPart}>
                            <div className={classNames('semi-bold', styles.menuTitle)}>{title}</div>
                            <div className={styles.closeWrapper} onClick={closeMenu}>
                                <Image className={styles.closeImg} src={closeImg} alt="close"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    {children}
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.menuFooter}>
                        <div className={styles.middleFooter}><MiddleFooter/></div>
                        <BottomFooter/>
                    </div>
                </div>
            </div>
            <div className={classNames(styles.menuBg, {[styles.menuBg_active]: isVisible})}
                 onClick={closeMenu}
            >
            </div>
        </>
    );
}

export default MenuContainer;