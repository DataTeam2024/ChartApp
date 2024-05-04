import React, { useEffect } from 'react';
import scrapeInstagram from '../Scrapping/ControllerScrapping';


function InstagramScrapping({ username }: { username: string }) {
    useEffect(() => {
        async function fetchData() {
            try {
                await scrapeInstagram(username);
            } catch (error) {
                console.error('Error al scrapear el perfil de Instagram:', error);
            }
        }

        fetchData();
    }, [username]);

    return <div>Cargando...</div>;
}

export default InstagramScrapping;