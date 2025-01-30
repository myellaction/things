'use client';

import styles from './Select.module.sass';
import arrowImg from '@icons/search-arrow.svg';
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";

const Select = ({placeholder='Всі категорії'}) => {
    const selectRef = useRef(null);

    const items = [
        {title: 'Одяг', slug: 'clothes', id: 2},
        {title: 'Електроніка', slug: 'electronics', id: 3},
        {title: 'Іграшки', slug: 'toys', id: 4},
        {title: "Меблі", slug: 'furniture', id: 5},
        {title: 'Тварини', slug: 'animals', id: 6},
        {title: 'Інструменти', slug: 'instruments', id: 7},
        {title: 'Спорт', slug: 'sport', id: 8},
    ];
    const [value, setValue] = useState(null);
    const [isOpened, setIsOpened] = useState(null);

    const closeBlock = (e) => {
        const target = e.target;
        if(![target, target.parentNode, target.parentNode?.parentNode]
            .some(item => item && item === selectRef.current))
        {
            setIsOpened(false);
        }
    }

    useEffect(() => {
        window.addEventListener('click', closeBlock);
        return () => window.removeEventListener('click', closeBlock);
    }, []);

    const itemsHtml = items.map((item, index) => {
        return <div className={styles.item} key={index} onClick={() => setValue(item)}>
                {item.title}
            </div>
    });

    return (
        <div className={classNames('semi-bold', styles.wrapper)} onClick={() => setIsOpened(prev => !prev)}>
            <div className={classNames(styles.block, {[styles.block_active]: isOpened})}>
                <div className={styles.header} ref={selectRef} >
                    <div className={styles.title}>{value ? value.title : placeholder}</div>
                    <div className={styles.arrow}><Image src={arrowImg} alt="arrow" /></div>
                </div>
            </div>
            {isOpened &&
                <div className={styles.items}>
                    {value && <div className={styles.item} onClick={() => setValue(null)}>{placeholder}</div>}
                    {itemsHtml}
                </div>
            }
        </div>
    );
}

export default Select;