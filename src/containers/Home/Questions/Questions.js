'use client';

import styles from './Questions.module.sass';
import questionsImg from '@icons/questions/questions.svg';
import arrowImg from '@icons/questions/arrow.svg';
import Image from "next/image";
import classNames from "classnames";
import {useRef, useState} from "react";

const Questions = () => {
    const [openedItem, setOpenedItem] = useState(null);
    const itemsRef = useRef([]);

    const items = [
        {
            title: 'Що це за сервіс?',
            answer: 'Усі онлайн-оголошення України на Коштовності - тут ви знайдете те, що шукали! Натиснувши на кнопку Додати оголошення, ви зможете розмістити оголошення щоб віддати не потрібну вам річ легко й швидко. За допомогою сервісу “Коштовності” ви зможете віддати чи знайти річ, практично все, що завгодно.'
        },
        {
            title: 'Як це працює?',
            answer: 'Усі онлайн-оголошення України на Коштовності - тут ви знайдете те, що шукали! Натиснувши на кнопку Додати оголошення, ви зможете розмістити оголошення щоб віддати не потрібну вам річ легко й швидко. За допомогою сервісу “Коштовності” ви зможете віддати чи знайти річ, практично все, що завгодно.'
        },
        {
            title: 'Це безкоштовно? ',
            answer: 'Усі онлайн-оголошення України на Коштовності - тут ви знайдете те, що шукали! Натиснувши на кнопку Додати оголошення, ви зможете розмістити оголошення щоб віддати не потрібну вам річ легко й швидко. За допомогою сервісу “Коштовності” ви зможете віддати чи знайти річ, практично все, що завгодно.'
        },
        {
            title: 'Чи можу я знайти необхідну для себе річ?',
            answer: 'Усі онлайн-оголошення України на Коштовності - тут ви знайдете те, що шукали! Натиснувши на кнопку Додати оголошення, ви зможете розмістити оголошення щоб віддати не потрібну вам річ легко й швидко. За допомогою сервісу “Коштовності” ви зможете віддати чи знайти річ, практично все, що завгодно.'
        },
    ];

    const changeOpenedItem = (index) => {
        if(openedItem === index){
            setOpenedItem(null);
            itemsRef.current[index].style.height = '';
        } else {
            itemsRef.current.forEach(item => {
                item.style.height = '';
            });
            const currentItem = itemsRef.current[index];
            currentItem.style.height = currentItem.scrollHeight + 'px';
            setOpenedItem(index);
        }
    }

    const itemsHtml = items.map((item, index) => {
        return (
            <div className={classNames(styles.item,
                {[styles.item_active]: openedItem === index})} key={index}
            >
                <div className={styles.itemHeader} onClick={() => changeOpenedItem(index)}>
                    <div className={styles.leftPart}>
                        <Image src={questionsImg} alt="question" className={styles.questionImg}/>
                        <div className={classNames('medium', styles.title)}>{item.title}</div>
                    </div>
                    <div className={styles.arrowWrapper}>
                        <Image src={arrowImg} alt="arrow"/>
                    </div>
                </div>
                <div className={styles.answerWrapper} ref={el => itemsRef.current[index] = el}>
                    <div className={styles.answer}>
                        {item.answer}
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className={styles.block}>
            <h2 className={styles.blockTitle}>Відповіді на часті запитання</h2>
            <div className={styles.items}>
                {itemsHtml}
            </div>
        </div>
    );
}

export default Questions;