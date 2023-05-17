import {useContext, useState, useEffect} from 'react';
import { apiContext } from '../../contexts/apiContext';
import { OfferResponce } from '../../api';
import Loader from '../../components/Loader/Loader';
import { Tabs } from 'antd';

const TAB_PANE = [
    {label: 'Ore', key: '1', children: 'ORE'},
    {label: 'Oil', key: '2', children: 'OIL'},
    {label: 'Uranium', key: '3', children: 'URANIUM'},
    {label: 'Diamond', key: '4', children: 'Diamond'}
]

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

    return <div className='offers_container'>{offersList[0]?.id ?
        <Tabs
        defaultActiveKey="1"
        centered
        items={TAB_PANE}
      /> : 
         <Loader isLoading/>}</div>
}

export default OffersPage