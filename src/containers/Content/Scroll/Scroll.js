'use client';

import styles from './Scroll.module.sass';
import scrollArrow from '@icons/scroll-arrow.svg';
import Image from "next/image";
import {useEffect, useState} from "react";
import classNames from "classnames";
import {isMobile} from "@utils/helpers/deviceHook";

const Scroll = () => {
    const [isVisible, setIsVisible] = useState(null);

    const handleScrolling = () => {
        const scrollPosition = window.scrollY
        if ( scrollPosition > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrolling);
        return () => window.removeEventListener('scroll', handleScrolling);
    }, []);

    const onClick = () => {
        const isMobileDevice = isMobile();
        const behavior = isMobileDevice ? 'auto' : 'smooth';
        window.scrollTo({top: 0, behavior});
        if(isMobileDevice){
            document.body.style.overflow = 'hidden';
            setTimeout(() => document.body.style.overflow = '', 1);
        }
    }

    return (
        <div className={classNames('right-container', styles.block, {[styles.block_active]: isVisible})}
            onClick={onClick}
        >
            <Image src={scrollArrow} alt="arrow" />
        </div>
    );
}

export default Scroll;