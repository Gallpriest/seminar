import React from 'react';
import * as cssMod from './Control.css';
import * as cn from 'classnames';
import ArrowSvg from '../../assets/icons/arrow.svg';

const Control = props => {
    const { direction, onClick } = props;
    const styles = cn(
        cssMod.control,
        direction === 'left' ? cssMod.left : cssMod.right
    );
    const clickController = () => onClick(direction);

    return (
        <button
            type="button"
            onClick={clickController}
            className={styles}
        >
            <img src={ArrowSvg} />
        </button>
    )
};

export default Control;