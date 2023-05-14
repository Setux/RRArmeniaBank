import {List, Card} from 'antd';
import {GiStonePile, GiOilDrum, GiCutDiamond} from 'react-icons/gi'
import {FaDollarSign, FaRadiation} from 'react-icons/fa'
import { GetBalanceResponce } from '../../api';

const RESOURCE_TYPES = [
    {resource: 'Oil', icon: <GiOilDrum />}, 
    {resource: 'Ore', icon: <GiStonePile />}, 
    {resource: 'Uranium', icon: <FaRadiation />}, 
    {resource: 'Diamond', icon: <GiCutDiamond />}
]

interface Props {
    balance: GetBalanceResponce<number>;
}

const BalanceList = ({balance}: Props) => {
    return (
        <>
            <List dataSource={[{resource: "$"}]} grid={{column: 1}} renderItem={(item) => {
                return <List.Item><Card title={<><FaDollarSign/> Money</>}>{balance[item.resource as "$"]}</Card></List.Item>
            }}/>
            <List dataSource={RESOURCE_TYPES} grid={{column: 2, gutter: 4}} renderItem={(item) => {
                return <List.Item><Card title={<>{item.icon} {item.resource}</>}>{balance[item.resource.toLowerCase() as 'oil' | 'ore' | 'diamond' | 'uranium']}</Card></List.Item>
            }} />
        </>
    )
}

export default BalanceList