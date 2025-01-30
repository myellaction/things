import styles from './BorderButton.module.sass';
import classNames from "classnames";

const BorderButton = ({title, onClick=null}) => {
    return (
        <button className={classNames('semi-bold', styles.button)} onClick={onClick}>
            {title}
        </button>
    );
}

export default BorderButton;