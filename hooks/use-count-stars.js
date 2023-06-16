import {useState, useEffect} from 'react';
import Image from 'next/image'

export const useCountStars = (quality) => {
    const [stars, addStars] = useState([]);

    useEffect(() => {
        addStars([]);
        for(let i = 0; i < quality; i++) {
            addStars(stars => [...stars, <Image key={i} src="/Vector.svg" width={10} height={9} alt="An SVG of an eye" />])
        }
    }, [quality]);

    return stars;
}