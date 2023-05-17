import {List, Card} from 'antd';
import {BsCart4} from 'react-icons/bs';

const mocked_data = [{amount: 1000, price: 82}, {amount: 100005450, price: 85}, {amount: 10, price: 81}]

const OffersList = () => {
    return (
        <List pagination={{ position: 'bottom', align: 'center' }} dataSource={mocked_data} grid={{column: 1, gutter: 4}} renderItem={(item) => {
            return <List.Item><Card title={<>Resources in stock: {item.amount}</>} actions={[<BsCart4 key="buy"/>]}>Price: {item.price}$/1</Card></List.Item>
        }} />
    )
}

export default OffersList