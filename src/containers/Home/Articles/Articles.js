import styles from './Articles.module.sass';

import img1 from '@img/article/1.png';
import img2 from '@img/article/2.png';
import img3 from '@img/article/3.png';
import img4 from '@img/article/4.png';
import img5 from '@img/article/5.png';
import img6 from '@img/article/6.png';
import img7 from '@img/article/7.png';
import img8 from '@img/article/8.png';
import testImg from '@img/slider/slide1.webp';

import lookImg from '@icons/article/look.svg';
import giftImg from '@icons/article/gift.svg';
import Article from "@containers/Content/Article/Article";
import BorderButton from "@containers/Buttons/BorderButton/BorderButton";
import Link from "next/link";


const Articles = () => {
    const items = [
        {
            title: 'Шкіряний рюкзак',
            image: img1,
            content: 'Доброго вечора, надіюсь на різдвяне диво в \n' +
                'пошуках такого рюкзака як на фото (або схожі)\n' +
                'З мене оплата доставки та донат!',
            tags: ['рюкзак', 'шкірянасумка', 'віддамкоштовності', 'gucci'],
            createdAt: '22 січня 2025',
            id: 1,
            productType: 'look',
            productTypeImg: lookImg
        },
        {
            title: 'Тент на авто',
            image: img2,
            content: 'Дуже потрібен універсальний тент на авто! \n' +
                'Дуже терміново. Наркоші намагаються \n' +
                'розібрати фару на моїй ластівці. Дільничний \n' +
                'прийняв заяву і порадив накрити тентом, \n' +
                'бо вони не зупиняться. Зараз вона не ..',
            tags: ['тент', 'тентнаавто', 'шукаюкоштовності'],
            createdAt: '22 січня 2025',
            id: 2,
            productType: 'look',
            productTypeImg: lookImg
        },
        {
            title: 'Майка для гімнастки',
            image: img3,
            content: 'На струнку дівчинку\n' +
                'Розмір вказано 36\n' +
                'По довжині 50см, вгрудях 30см і до 37см \n' +
                'тягнеться.\n' +
                'В гарному стані. \n' +
                'Відправка можлива Укрпоштою, але як ..',
            tags: ['гімнастика', 'дитячийодяг', 'gucci', 'віддамкоштовності'],
            createdAt: '22 січня 2025',
            id: 3,
            productType: 'look',
            productStatus: 'sent',
            productTypeImg: lookImg
        },
        {
            title: 'Жилетка',
            image: img4,
            content: 'Жилетка бонпрікс як нова, бо вдягнула усього раз чи 2. 34 р ХС. Донат 20 грн\n' +
                'УП, НП\n',
            tags: ['жилетка', 'віддамкоштовності'],
            createdAt: '22 січня 2025',
            id: 4,
            productType: 'gift',
            productTypeImg: giftImg,
            isChecked: true
        },
        {
            title: 'Кроватка на хлопчика',
            image: img5,
            content: 'Буду вдячна за ввічливе спілкування та \n' +
                'фото/скрин бажаного.\n' +
                'Пересилка за ваш рахунок\n' +
                'м. Дніпро \n' +
                'Відправка НП - швидко ..',
            tags: ['кроватка', 'віддамкроватку', 'віддамкоштовності'],
            createdAt: '22 січня 2025',
            id: 5,
            productType: 'gift',
            productTypeImg: giftImg
        },
        {
            title: 'Чорні бокали',
            image: img6,
            content: 'Шукаю такі бокали, вже давно мрію про них, шукаю свою фею 😉\n' +
                'Доставка + донат з мене!',
            tags: ['бокали', 'чорнібокали', 'шукаюкоштовності'],
            createdAt: '22 січня 2025',
            id: 6,
            productType: 'look',
            productTypeImg: lookImg
        },
        {
            title: 'Фарба для волосся',
            image: img7,
            content: 'Вітаю. Віддам фарбу для волосся, відкрито сьогодні (12.01.2025) та використано приблизно грам 5-10. Термін придатності до 2027 року. \n' +
                'Не підійшов колір, доставка ваша.',
            tags: ['фарба', 'віддамкоштовності'],
            createdAt: '22 січня 2025',
            id: 7,
            productType: 'gift',
            productTypeImg: giftImg
        },
        {
            title: 'Снуд в гарному стані',
            image: img8,
            content: 'Снуд, шарф в доброму стані',
            tags: ['снуд', 'шарф', 'віддамкоштовності'],
            createdAt: '22 січня 2025',
            id: 8,
            productType: 'gift',
            productTypeImg: giftImg
        },
    ];

    const articles = items.map(item => {
        return <Article item={item} key={item.id} />
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                {articles}
            </div>
            <div className={styles.button}>
                <Link href="/">
                    <BorderButton title="Більше оголошень" />
                </Link>
            </div>
        </div>
    );
}

export default Articles;