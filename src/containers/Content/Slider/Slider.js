'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Slider.module.sass';

import slide1 from '@img/slider/slide1.webp';
import slide2 from '@img/slider/slide2.webp';
import slide3 from '@img/slider/slide3.webp';

// import required modules
import {Navigation, Pagination} from 'swiper/modules';
import Image from "next/image";
import Container from "@containers/Content/Container/Container";
import classNames from "classnames";
import {useEffect, useState} from "react";
import Arrow from "@containers/Slider/Arrow/Arrow";
import Link from "next/link";

const Slider = () => {
    const [loaded, setLoaded] = useState(null);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const slides = [
        {
            'image': slide1,
            'title': 'Віддай те, що тобі не потрібне, зміни чиєсь життя та захисти планету',
            'description': 'Візуально захопливе відео/слайд, яке підкреслює ідею передачі непотрібних\n' +
                'або не використаних речей тим, хто їх потребує'
        },
        {
            'image': slide2,
            'title': 'Віддай те, що тобі не потрібне, зміни чиєсь життя та захисти планету',
            'description': 'Візуально захопливе відео/слайд, яке підкреслює ідею передачі непотрібних\n' +
                'або не використаних речей тим, хто їх потребує'
        },
        {
            'image': slide3,
            'title': 'Віддай те, що тобі не потрібне, зміни чиєсь життя та захисти планету',
            'description': 'Візуально захопливе відео/слайд, яке підкреслює ідею передачі непотрібних\n' +
                'або не використаних речей тим, хто їх потребує'
        },
    ];

    const slidesHtml = slides.map((slide, index) => {
        return (
            <SwiperSlide key={index}>
                <div className={styles.item}>
                    <Image src={slide.image} alt="slide" priority={index === 0}
                           className={styles.image}
                    />
                    <div className={styles.content}>
                        <Container>
                            <div className={styles.contentWrapper}>
                                <div className={styles.title}>{slide.title}</div>
                                <div className={styles.description}>{slide.description}</div>
                                <Link href="/" className={classNames(styles.button, 'semi-bold')}>
                                    Додати оголошення
                                </Link>
                            </div>
                        </Container>
                    </div>
                    <div className={styles.imageBg}></div>
                </div>
            </SwiperSlide>
        )
    });

    return (
        <div className={styles.sliderWrapper}>
            <Swiper navigation={{nextEl: '.' + styles.swiperNext, prevEl: '.' + styles.swiperPrev}}
                modules={[Navigation, Pagination]} speed={600}
                className="mySwiper" loop={true}
                pagination={{el: '.' + styles.pagination,
                    bulletActiveClass: styles.activePg,
                    bulletClass: styles.pg,
                    bulletElement: 'div',
                    clickable: true
                }}
            >
                <div className={styles.block}>
                    {slidesHtml}
                </div>
                <div className={classNames('left-container', styles.swiperPrev)}>
                    <Arrow/>
                </div>
                <div className={classNames('right-container', styles.swiperNext)}>
                    <Arrow type="right"/>
                </div>
                <div className={styles.pagination}>
                    {slides.map((item, index) => <div className={styles.pg} key={index}></div>)}
                </div>
            </Swiper>
            <div className={classNames(styles.bg, {[styles.bg_active]: loaded})}></div>
        </div>
    );
}

export default Slider;