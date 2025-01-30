import styles from './Article.module.sass';
import Image from "next/image";
import Tag from "@containers/Content/Tag/Tag";

import checkedImg from '@icons/article/checked.svg';
import classNames from "classnames";
import Link from "next/link";

const Article = ({item}) => {
    const {title, image, content, tags, createdAt, id,
        productType, productTypeImg, productStatus, isChecked} = item;

    const tagsHtml = tags.map((item, index) => {
        return <div className={styles.tag} key={index}><Tag content={item} /></div>
    });

    return (
        <div className={styles.block}>
            <Link href="/" className={styles.imageBlock}>
                <div className={styles.imageContainer}>
                    <Image src={image} alt={title} className={styles.image} />
                </div>
                <div className={styles.smallImg}>
                    {productStatus === 'sent' ?
                        <div className={styles.sent}>Річ забрали</div>
                        :
                        <Image src={productTypeImg} alt={productType} />
                    }
                </div>
            </Link>
            <div className={styles.contentBlock}>
                <Link href="/" className={classNames('semi-bold', styles.title)}>{title}</Link>
                <div className={styles.content}>{content}</div>
            </div>
            <div className={styles.bottomBlock}>
                <div className={styles.tags}>{tagsHtml}</div>
                <div className={styles.createdBlock}>
                    <div className={classNames('medium', styles.createdAt)}>{createdAt}</div>
                    {isChecked &&
                        <div className={styles.checked}>
                            <div className={styles.checkedImgWrapper}>
                                <Image src={checkedImg} alt="checked"/>
                            </div>
                            <div className={classNames('medium', styles.checkedTitle)}>Перевірено</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Article;