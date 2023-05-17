import {useContext, useState, useEffect} from 'react';
import { apiContext } from '../../contexts/apiContext';
import { OfferResponce } from '../../api';

const OffersPage = () => {
    const API = useContext(apiContext);
    const [offersList, setOffersList] = useState({} as OfferResponce[])

    useEffect(() => {
        if (API.id) {
            const getData = async () => {
                const data = await API.getAllOffers();
                setOffersList(data);
            }

            getData();
        }
    }, [API])

    console.log(offersList)

    return <div>Offers</div>
}

export default OffersPage