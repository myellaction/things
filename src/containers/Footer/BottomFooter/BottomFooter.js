import styles from './BottomFooter.module.sass';
import Link from "next/link";

const BottomFooter = () => {
    return (
        <div className={styles.bottomBlock}>
            <div className={styles.line}></div>
            <div className={styles.info}>
                <div className={styles.copyright}>
                    © {new Date().getFullYear()} Коштовності. Всі права захищені і належать авторам сайту
                </div>
                <div className={styles.documents}>
                    <Link href="/public" className={styles.offer}>Публічна оферта</Link>
                    <div className={styles.sep}>|</div>
                    <Link href="/public" className={styles.confident}>Політика конфіденційності</Link>
                </div>
            </div>
        </div>
    );
}

export default BottomFooter;