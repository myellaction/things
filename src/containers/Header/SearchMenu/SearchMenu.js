import styles from './SearchMenu.module.sass';
import MenuContainer from "@containers/Header/MenuContainer/MenuContainer";
import Search from "@containers/Content/Search/Search";
import {useState} from "react";
import timeImg from '@icons/menu/time.svg';
import catImg from '@icons/menu/cat.svg';
import clearImg from '@icons/menu/search-clear.svg';
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

const SearchMenu = ({isVisible, closeMenu}) => {
    const [lastSearch, setLastSearch] = useState([{id: 1, title: 'кроватка'},
        {id: 2, title: 'пилесос'}]);
    const popularCats = ['Одяг', 'Електроніка', 'Іграшки'];

    const clearSearch = (id) => {
        if(id){
            const items = lastSearch.slice();
            const index = items.findIndex(item => item.id === id);
            if(index !== -1){
                items.splice(index, 1);
                setLastSearch(items);
            }
        } else {
            setLastSearch([]);
        }
    }

    const searchItemsHtml = lastSearch.map(item => {
        return (
            <div className={styles.searchItem} key={item.id}>
                <div className={styles.leftItemPart}>
                    <div className={styles.timeWrapper}>
                        <Image src={timeImg} alt="history" className={styles.timeImg} />
                    </div>
                    <div className={styles.searchTitle}>{item.title}</div>
                </div>
                <div className={styles.clearImgWrapper} onClick={() => clearSearch(item.id)}>
                    <Image src={clearImg} alt="clear" className={styles.clearImg} />
                </div>
            </div>
        );
    });

    const catsItemsHtml = popularCats.map((item, index) => {
        return (
            <Link href="/" className={styles.cat} key={index}>
                <div className={styles.catImgWrapper}>
                    <Image src={catImg} alt="category" />
                </div>
                <div className={classNames('medium' ,styles.catTitle)}>{item}</div>
            </Link>
        )
    });

    return (
        <MenuContainer isVisible={isVisible} closeMenu={closeMenu} title="Пошук">
            <div className={styles.search}>
                <form>
                    <Search isMobile={true} id="mobile-content" />
                </form>
            </div>
            {lastSearch.length > 0 &&
                <div className={styles.lastSearch}>
                    <div className={styles.lastSearchHeader}>
                        <div className={classNames('semi-bold', styles.blockTitle)}>Останнє, що шукали</div>
                        <div className={styles.clear} onClick={() => clearSearch()}>Почистити</div>
                    </div>
                    <div className={styles.lastSearchItems}>
                        {searchItemsHtml}
                    </div>
                </div>
            }
            <div className={styles.cats}>
                <div className={classNames('semi-bold', styles.blockTitle, styles.catsTitle)}>
                    Найпопулярніші категорії
                </div>
                <div className={styles.catsItems}>
                    {catsItemsHtml}
                </div>
            </div>
        </MenuContainer>
    );
}

export default SearchMenu;