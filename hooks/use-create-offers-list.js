import { useState, useEffect } from 'react';

export const useCreateOffersList = (offers) => {
    const [offersList, setOffersList] = useState([]);
    const [showAllOffers, setShowAllOffers] = useState(false);

    useEffect(() => {
        if (offers.length <= 3) {
        setShowAllOffers(true);
        }

        const _offers = !showAllOffers ? offers.slice(0, 3) : offers;
        setOffersList(_offers);

    }, [showAllOffers]);

    const showAllOffersHandler = () => {
        setShowAllOffers(true);
      }

    return {
        offersList,
        showAllOffers,
        showAllOffersHandler
    }

}