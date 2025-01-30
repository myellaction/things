import styles from "./Home.module.sass";
import Slider from "@containers/Content/Slider/Slider";
import SearchPanel from "@containers/Content/SearchPanel/SearchPanel";
import PopularCats from "@containers/Content/PopularCats/PopularCats";
import Articles from "@containers/Home/Articles/Articles";
import Container from "@containers/Content/Container/Container";
import HomeInfo from "@containers/Home/HomeInfo/HomeInfo";
import Questions from "@containers/Home/Questions/Questions";
import Partners from "@containers/Home/Partners/Partners";

export default function Home() {
    return (
        <div className={styles.block}>
            <div className={styles.slider}>
                <Slider />
            </div>
            <div className={styles.search}>
                <SearchPanel />
            </div>
            <div className={styles.cats}>
                <PopularCats />
            </div>
            <Container isHidden={true}>
                <div className={styles.articles}>
                    <h2 className={styles.articlesTitle}>Нові оголошення</h2>
                    <div className={styles.articlesBlock}>
                        <Articles/>
                    </div>
                </div>
                <div className={styles.info}>
                    <HomeInfo />
                </div>
                <div className={styles.questions}>
                    <Questions />
                </div>
                <div className={styles.partners}>
                    <Partners />
                </div>
            </Container>
        </div>
    );
}
