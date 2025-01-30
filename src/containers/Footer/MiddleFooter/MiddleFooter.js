import styles from './MiddleFooter.module.sass';
import Link from "next/link";
import Image from "next/image";
import Lang from "@containers/Content/Lang/Lang";
import telegramImg from "@icons/footer/Telegram.svg";
import instagramImg from "@icons/footer/Instagram.svg";
import youtubeImg from "@icons/footer/Youtube.svg";
import facebookImg from "@icons/footer/Facebook.svg";

const MiddleFooter = () => {
    const socialItems = [
        {link: '/', image: telegramImg},
        {link: '/', image: instagramImg},
        {link: '/', image: youtubeImg},
        {link: '/', image: facebookImg},
    ];

    return (
        <div className={styles.rightPart}>
            <div className={styles.socialTitle}>Ми в соц. мережах:</div>
            <div className={styles.socials}>
                {socialItems.map((item, index) => {
                    return (<Link href={item.link} key={index} className={styles.social}>
                        <Image src={item.image} alt="social"/>
                    </Link>)
                })
                }
            </div>
            <div className={styles.langs}>
                <Lang isLight={false}/>
            </div>
        </div>
    );
}

export default MiddleFooter;