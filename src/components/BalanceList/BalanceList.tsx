import {List, Card} from 'antd';
// import {GiStonePile, GiOilDrum, GiCutDiamond} from 'react-icons/gi'
import { FaDollarSign} from 'react-icons/fa'
import { GetBalanceResponce } from '../../api';

// const RESOURCE_TYPES = [{resource: 'Oil'}, {resource: 'Ore'}, {resource: 'Uranium'}, {resource: 'Diamond'}]

interface Props {
    balance: GetBalanceResponce<number>;
}

const BalanceList = ({balance}: Props) => {
    return (
        <>
            <List dataSource={[{resource: "$"}]} grid={{column: 1}} renderItem={(item) => {
                return <List.Item><Card title={<><FaDollarSign/> Money</>}>{balance[item.resource as "$"]}</Card></List.Item>
            }}/>
        </>
    )
}

export default BalanceList