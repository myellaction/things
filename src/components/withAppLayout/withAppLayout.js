import styles from './App.module.sass';
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Scroll from "@containers/Content/Scroll/Scroll";

function withAppLayout(BaseComponent) {
    return props => {
        return (
            <div className={styles.main} id="main">
                <Header />
                <BaseComponent {...props} />
                <Scroll />
                <Footer />
            </div>
        );
    }
}

export default withAppLayout;