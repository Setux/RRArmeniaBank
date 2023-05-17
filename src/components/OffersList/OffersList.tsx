import {List, Card, Empty} from 'antd';
import {BsCart4} from 'react-icons/bs';
import { OfferResponce } from '../../api';


interface Props {
    list: OfferResponce[];
}

const OffersList = ({list}: Props) => {
    return list.length !== 0 ? <List pagination={{ position: 'bottom', align: 'center', pageSize: 3 }} dataSource={list} grid={{column: 1, gutter: 4}} renderItem={(item) => {
        return <List.Item><Card title={<>Resources in stock: {item.amount.toString().split('').reverse().join('').match(/.{1,3}/g)?.reverse().map(el => el.split('').reverse().join('')).join('.')}</>} actions={[<BsCart4 key="buy"/>]}>Price: {item.price}$/1</Card></List.Item>
    }} /> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='There is no one offer :('/>;
}

export default OffersList