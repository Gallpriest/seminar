import React, { useState, useEffect } from 'react';
import * as cssMod from './Main.css';
import Form from '../Form';
import MemeZone from '../MemeZone';
import MemeStartImage from '../../assets/images/meme_plus.jpg';

const Main = () => {
    const [values, setValues] = useState({
        topText: '',
        bottomText: ''
    });
    const [allMemes, setMemes] = useState();
    const [memeImage, setMemeImage] = useState(MemeStartImage);
    const urlMemes = 'https://api.imgflip.com/get_memes';

    const handleChange = (name, value) => setValues({ ...values, [name]: value });
    const handleGenerateMeme = () => {
        const randNumber = Math.floor(Math.random() * allMemes.length);
        const randMemeImage = allMemes[randNumber].url;
        setMemeImage(randMemeImage);
    }

    useEffect(() => {
        fetch(urlMemes)
            .then(data => data.json())
            .then(response => {
                const { memes } = response.data
                setMemes(memes);
            });
    }, []);

    return (
        <main className={cssMod.main}>
            <section>
                <Form 
                    handleFormChange={handleChange}
                    handleGenerateMeme={handleGenerateMeme}
                />
            </section>
            <section>
                <MemeZone 
                    values={values}
                    image={memeImage}
                />
            </section>
        </main>
    )
};

export default Main;