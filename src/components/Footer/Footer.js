import styles from './Footer.module.sass';

import homeImg from '@icons/footer/home.svg';
import productsImg from '@icons/footer/products.svg';
import blogImg from '@icons/footer/blog.svg';
import locationImg from '@icons/footer/location.svg';
import profileImg from '@icons/footer/profile.svg';
import chatImg from '@icons/footer/chat.svg';
import paymentImg from '@icons/footer/payment.svg';

import telegramImg from '@icons/footer/Telegram.svg';
import instagramImg from '@icons/footer/Instagram.svg';
import youtubeImg from '@icons/footer/Youtube.svg';
import facebookImg from '@icons/footer/Facebook.svg';
import Image from "next/image";
import Lang from "@containers/Content/Lang/Lang";
import Container from "@containers/Content/Container/Container";
import classNames from "classnames";
import Link from "next/link";
import BottomFooter from "@containers/Footer/BottomFooter/BottomFooter";
import MiddleFooter from "@containers/Footer/MiddleFooter/MiddleFooter";


const Footer = () => {
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
            image: productsImg
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
                <Link href="/" className={styles.item} key={index}>
                    <div className={styles.imgWrapper}>
                        <Image src={item.image} alt={item.title} />
                    </div>
                    <div className={classNames('medium', styles.title)}>{item.title}</div>
                </Link>
            )
        });
    }

    const itemsHtml1 = prepareItems(items1);
    const itemsHtml2 = prepareItems(items2);

    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.block}>
                    <div className={styles.leftPart}>
                        <div className={styles.firstBlock}>
                            {itemsHtml1}
                        </div>
                        <div className={styles.secondBlock}>
                            {itemsHtml2}
                        </div>
                    </div>
                    <MiddleFooter />
                </div>
                <BottomFooter />
            </Container>
        </footer>
    );
}

export default Footer;