import {useContext, useState, useEffect} from 'react';
import { apiContext } from '../../contexts/apiContext';
import { OfferResponce } from '../../api';
import Loader from '../../components/Loader/Loader';
import { Tabs } from 'antd';
import OffersList from '../../components/OffersList/OffersList';

const TAB_PANE = [
    {label: 'Ore', key: 'ore'},
    {label: 'Oil', key: 'oil'},
    {label: 'Uranium', key: 'uranium'},
    {label: 'Diamond', key: 'diamond'},
    {label: 'My', key: 'my'}
]

const OffersPage = () => {
    const API = useContext(apiContext);
    const [offersList, setOffersList] = useState({} as OfferResponce[])
    const [activeList, setActiveList] = useState('ore')
    const [visibleList, setVisibleList] = useState<OfferResponce[]>([]);

    useEffect(() => {
        if (API.id) {
            const getData = async () => {
                const data = await API.getAllOffers();
                setOffersList(data);
            }

            getData();
        }
    }, [API])

    useEffect(() => {
        if (offersList[0]?.id && activeList === 'my') {
            setVisibleList(offersList.filter(item => item.user_id === API.id.toString()))
        } else if (offersList[0]?.id) {
            setVisibleList(offersList.filter(item => item.type === activeList && item.user_id !== API.id.toString()))
        }
    }, [activeList, offersList, API])

    console.log(offersList)

    return <div className='offers_container'>
        <Tabs
        defaultActiveKey={activeList}
        centered
        items={TAB_PANE}
        onChange={(key) => setActiveList(key)}
      />
        {offersList[0]?.id ? <OffersList list={visibleList}/> : <Loader isLoading/>}</div>
}

export default OffersPage