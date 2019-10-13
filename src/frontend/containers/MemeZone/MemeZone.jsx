import React from 'react';
import * as cssMod from './MemeZone.css';

const MemeZone = props => {
    const { topText, bottomText } = props.values;
    const { image } = props;

    return (
        <div className={cssMod.meme}>
            <img src={image} alt="Картинка мема"/>
            <h2 className={cssMod.topText}>{ topText }</h2>
            <h2 className={cssMod.bottomText}>{ bottomText }</h2>
        </div>
    )
};

export default MemeZone;