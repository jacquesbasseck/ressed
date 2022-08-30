import React, {useEffect, useState} from 'react';
import AboutAPI from '../services/AboutAPI';

const About = () => {

    const [about, setAbout] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        fetchAbout();
    }, [])

    const fetchAbout = async () => {
        try {
            const contentAbout = await AboutAPI.getAbout();
            setAbout(contentAbout);
            setIsLoading(false);
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1>{about.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: about.content }} />
        </>
    );

}

export default About;
