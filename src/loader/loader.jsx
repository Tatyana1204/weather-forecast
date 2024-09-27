import React from 'react';
import classes from './loader.module.css';
const Loader = () => {
    return (
        <div className={classes.loader}>
            <div className={classes.loaderItem}></div>
            <h5> Идет загрузка...</h5>
        </div>

    );
};

export default Loader;