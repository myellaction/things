import styles from './SearchPanel.module.sass';
import Container from "@containers/Content/Container/Container";
import Search from "@containers/Content/Search/Search";
import Select from "@containers/Form/Select/Select";
import classNames from "classnames";

const SearchPanel = () => {
    return (
        <div className={styles.block}>
            <Container>
                <form>
                    <div className={styles.wrapper}>
                        <div className={styles.search}>
                            <Search/>
                        </div>
                        <div className={styles.select}><Select/></div>
                        <button className={classNames('semi-bold', styles.button)} type="submit">Пошук</button>
                    </div>
                </form>
            </Container>
        </div>
    );
}

export default SearchPanel;