import styles from './Partners.module.sass';
import partnerImg1 from '@icons/partners/Partner1.png';
import partnerImg2 from '@icons/partners/Partner2.png';
import Image from "next/image";

const Partners = () => {
    const partners = [partnerImg1, partnerImg2, partnerImg2, partnerImg2, partnerImg2];
    const itemsHtml = partners.map((item, index) => {
        return <Image src={item} alt="partner" key={index} className={styles.item} />;
    });

    return (
        <div className={styles.block}>
            <h2 className={styles.blockTitle}>Наші партнери</h2>
            <div className={styles.items}>
                {itemsHtml}
            </div>
        </div>
    );
}

export default Partners;