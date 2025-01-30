import styles from './Menu.module.sass';
import Image from "next/image";
import logoImg from '@icons/mobile-logo.png';
import closeImg from '@icons/menu/cross.svg';
import classNames from "classnames";
import {useEffect} from "react";
import homeImg from "@icons/footer/home.svg";
import productsImg from "@icons/footer/products.svg";
import blogImg from "@icons/footer/blog.svg";
import locationImg from "@icons/footer/location.svg";
import profileImg from "@icons/footer/profile.svg";
import chatImg from "@icons/footer/chat.svg";
import paymentImg from "@icons/footer/payment.svg";
import createImg from '@icons/menu/create.svg';
import Link from "next/link";
import MenuContainer from "@containers/Header/MenuContainer/MenuContainer";

const Menu = ({isVisible, closeMenu}) => {

    const items1 = [
        {
            title: 'Головна',
            image: homeImg
        },
        {
            title: 'Всі оголошення',
            image: productsImg
        },
        {
            title: 'Блог',
            image: blogImg
        },
        {
            title: 'Контакти',
            image: locationImg
        }
    ];

    const items2 = [
        {
            title: 'Мій профіль',
            image: profileImg
        },
        {
            title: 'Мої оголошення',
            image: productsImg,
            withCreation: true
        },
        {
            title: 'Чат',
            image: chatImg
        },
        {
            title: 'Моя підписка',
            image: paymentImg
        }
    ];

    const prepareItems = (items) => {
        return items.map((item, index) => {
            return (
                <div className={styles.itemWrapper} key={index}>
                    <Link href="/" className={styles.item}>
                        <div className={styles.imgWrapper}>
                            <Image src={item.image} alt={item.title} />
                        </div>
                        <div className={classNames('medium', styles.itemTitle)}>{item.title}</div>
                    </Link>
                    {item.withCreation &&
                        <Link href="/" className={styles.create}>
                            <div className={styles.createTitle}>Додати</div>
                            <Image src={createImg} alt="create" />
                        </Link>
                    }
                </div>
            )
        });
    }

    const itemsHtml1 = prepareItems(items1);
    const itemsHtml2 = prepareItems(items2);

    return (
        <MenuContainer isVisible={isVisible} closeMenu={closeMenu} headerBorder={true}>
            <div className={styles.items}>
                <div className={styles.firstItems}>
                    {itemsHtml1}
                </div>
                <div className={styles.secondItems}>
                    {itemsHtml2}
                </div>
            </div>
        </MenuContainer>
    );
}

export default Menu;