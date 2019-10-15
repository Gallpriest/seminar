import React, { useState, useEffect } from 'react';
import * as cssMod from './Main.css';
import Form from '../Form';
import MemeZone from '../MemeZone';
import { useControlContext } from '../../context/ControlContext';
import MemeStartImage from '../../assets/images/meme_minus.jpg';

const Main = () => {
    const initialImage = localStorage.getItem('memeImage') ? localStorage.getItem('memeImage') : MemeStartImage;
    const [values, setValues] = useState({
        topText: '',
        bottomText: ''
    });
    const [allMemes, setMemes] = useState();
    const [memeImage, setMemeImage] = useState(initialImage);
    const urlMemes = 'https://api.imgflip.com/get_memes';

    const { pageState } = useControlContext();

    const handleChange = (name, value) => setValues({ ...values, [name]: value });
    const handleGenerateMeme = event => {
        event.preventDefault();
        const randNumber = Math.floor(Math.random() * allMemes.length);
        const randMemeImage = allMemes[randNumber].url;
        localStorage.setItem('memeImage', randMemeImage);
        setMemeImage(randMemeImage);
    }

    useEffect(() => {
        fetch(urlMemes)
            .then(data => data.json())
            .then(response => {
                const { memes } = response.data;
                setMemes(memes);
            });

        return () => {
            return null;
        }
    }, []);

    let FORM_TEMPLATE; 
    if (pageState > 2) {
        FORM_TEMPLATE = (
            <Form
                handleFormChange={handleChange}
                handleGenerateMeme={handleGenerateMeme}
            />
        ) 
    } else {
        FORM_TEMPLATE = null;
    };

    let MEME_TEMPLATE; 
    if (pageState > 3) {
        MEME_TEMPLATE = (
            <MemeZone 
                values={values}
                image={memeImage}
            />
        ) 
    } else {
        MEME_TEMPLATE = null;
    };

    return (
        <main className={cssMod.main}>
            <section>
                { FORM_TEMPLATE }
            </section>
            <section>
                { MEME_TEMPLATE }
            </section>
        </main>
    )
};

export default Main;