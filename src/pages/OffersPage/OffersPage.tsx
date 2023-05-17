import {useContext, useState, useEffect} from 'react';
import { apiContext } from '../../contexts/apiContext';
import { OfferResponce } from '../../api';
import Loader from '../../components/Loader/Loader';
import { Tabs } from 'antd';

const TAB_PANE = [
    {label: 'Ore', key: '1'},
    {label: 'Oil', key: '2'},
    {label: 'Uranium', key: '3'},
    {label: 'Diamond', key: '4'}
]

const OffersPage = () => {
    const API = useContext(apiContext);
    const [offersList, setOffersList] = useState({} as OfferResponce[])
    const [activeList, setActiveList] = useState('1')

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

    return <div className='offers_container'>
        <Tabs
        defaultActiveKey={activeList}
        centered
        items={TAB_PANE}
        onChange={(key) => setActiveList(key)}
      />
        {offersList[0]?.id ? activeList : <Loader isLoading/>}</div>
}

export default OffersPage