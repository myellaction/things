import styles from './Search.module.sass';
import searchImg from '@icons/search.svg';
import mobileSearchImg from '@icons/menu/mobile-search.svg';
import Image from "next/image";
import classNames from "classnames";

const Search = ({isMobile=false, name='content', id='content'}) => {
    return (
        <label className={classNames(styles.block, {[styles.block_mobile]: isMobile})} htmlFor={id}>
            <div className={styles.imageWrapper}>
                <Image src={!isMobile ? searchImg : mobileSearchImg} alt="search" />
            </div>
            <div className={styles.separator}>|</div>
            <input className={styles.input} name={name} placeholder="Що шукаєте?" id={id} />
        </label>
    );
}

export default Search;