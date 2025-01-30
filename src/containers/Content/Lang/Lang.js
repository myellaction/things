import styles from './Lang.module.sass';
import classNames from "classnames";
import React from 'react';

const Lang = ({isLight=true}) => {
    const langSelected = 'uk';
    const langs = [
        {'title': 'Укр', 'slug': 'uk'},
        {'title': 'Eng', 'slug': 'en'},
    ];
    const activeClass = isLight ? styles.lang_light_active : styles.lang_black_active;
    const langClass = isLight ? styles.lang_light : styles.lang_black;

    const langsHtml = langs.map((lang, index) => {
        return (
            <React.Fragment key={lang.slug}>
                <div className={classNames(langClass, {'medium': lang.slug !== langSelected},
                    {[activeClass]: lang.slug === langSelected})}
                >
                    {lang.title}
                </div>
                {index !== langs.length - 1 && <div className={classNames(styles.separator,
                    {[styles.separator_black]: !isLight}
                )}>|</div>}
            </React.Fragment>
        );
    });


    return (
        <div className={styles.block}>
            {langsHtml}
        </div>
    );
}

export default Lang;