import styles from './Tag.module.sass';

const Tag = ({content}) => {
    return (
        <div className={styles.block}>{content}</div>
    );
}

export default Tag;