'use client';

import styles from './Scroll.module.sass';
import scrollArrow from '@icons/scroll-arrow.svg';
import Image from "next/image";
import {useEffect, useState} from "react";
import classNames from "classnames";

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

    return (
        <div className={classNames('right-container', styles.block, {[styles.block_active]: isVisible})}
         onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
            <Image src={scrollArrow} alt="arrow" />
        </div>
    );
}

export default Scroll;