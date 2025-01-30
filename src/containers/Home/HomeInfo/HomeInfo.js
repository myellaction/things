import styles from './HomeInfo.module.sass';

const HomeInfo = () => {
    return (
        <div className={styles.block}>
            <h1 className={styles.title}>Онлайн сервіс “Коштовності”</h1>
            <div className={styles.desc}>
                Усі онлайн-оголошення України на Коштовності - тут ви знайдете те, що шукали!<br />
                За допомогою сервісу “Коштовності” ви зможете віддати чи знайти річ, практично все, що завгодно.<br /><br />
                Натиснувши на кнопку Додати оголошення, ви зможете розмістити оголошення щоб віддати не потрібну вам річ легко й швидко.
            </div>
        </div>
    );
}

export default HomeInfo;