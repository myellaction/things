'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from './PopularCats.module.sass';
import './PopularCats.sass';
import Container from "@containers/Content/Container/Container";
import clothesImg from '@icons/categories/clothes.svg';
import electronicsImg from '@icons/categories/electronics.svg';
import toysImg from '@icons/categories/toys.svg';
import furnitureImg from '@icons/categories/furniture.svg';
import animalsImg from '@icons/categories/animals.svg';
import instrumentsImg from '@icons/categories/instruments.svg';
import sportImg from '@icons/categories/sport.svg';
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import BorderButton from "@containers/Buttons/BorderButton/BorderButton";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";


const PopularCats = () => {

    const items = [
        {title: 'Одяг', slug: 'clothes', id: 2, image: clothesImg},
        {title: 'Електроніка', slug: 'electronics', id: 3, image: electronicsImg},
        {title: 'Іграшки', slug: 'toys', id: 4, image: toysImg},
        {title: "Меблі", slug: 'furniture', id: 5, image: furnitureImg},
        {title: 'Тварини', slug: 'animals', id: 6, image: animalsImg},
        {title: 'Інструменти', slug: 'instruments', id: 7, image: instrumentsImg},
        {title: 'Спорт', slug: 'sport', id: 8, image: sportImg},

        {title: 'Одяг', slug: 'clothes', id: 2, image: clothesImg},
        {title: 'Електроніка', slug: 'electronics', id: 3, image: electronicsImg},
        {title: 'Іграшки', slug: 'toys', id: 4, image: toysImg},
        {title: "Меблі", slug: 'furniture', id: 5, image: furnitureImg},
        {title: 'Тварини', slug: 'animals', id: 6, image: animalsImg},
        {title: 'Інструменти', slug: 'instruments', id: 7, image: instrumentsImg},
        {title: 'Спорт', slug: 'sport', id: 8, image: sportImg},

        {title: 'Одяг', slug: 'clothes', id: 2, image: clothesImg},
        {title: 'Електроніка', slug: 'electronics', id: 3, image: electronicsImg},
        {title: 'Іграшки', slug: 'toys', id: 4, image: toysImg},
        {title: "Меблі", slug: 'furniture', id: 5, image: furnitureImg},
        {title: 'Тварини', slug: 'animals', id: 6, image: animalsImg},
    ];

    const itemsHtml = items.map((item, index) => {
        return (
            <SwiperSlide key={index}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageWrapper}>
                        <Image src={item.image} alt={item.slug} />
                    </div>
                    <div className={classNames(styles.title, 'semi-bold')}>{item.title}</div>
                </Link>
            </SwiperSlide>
        );
    })

    return (
        <Container>
            <div className={styles.block}>
                <h2 className={styles.blockTitle}>Популярні категорії</h2>
                <div className={styles.cats}>
                    <Swiper speed={600} className="swiper-cats" loop={true}
                        modules={[Autoplay]} slidesPerView="auto"
                        autoplay={{delay: 2500, disableOnInteraction: false}}
                    >
                        {itemsHtml}
                    </Swiper>
                </div>
                <div className={styles.button}>
                    <Link href="/categories"><BorderButton title="Всі категорії" /></Link>
                </div>
            </div>
        </Container>
    );
}

export default PopularCats;