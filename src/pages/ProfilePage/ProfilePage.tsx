import { useContext, useEffect, useState } from "react";
import { apiContext } from "../../contexts/apiContext";
import { UserResponce } from "../../api";
import { Divider } from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import Loader from "../../components/Loader/Loader";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import BalanceList from "../../components/BalanceList/BalanceList";

const ProfilePage = () => {
    const API = useContext(apiContext);
    const [user, setUser] = useState({} as UserResponce);

    useEffect(() => {
        if (API.id) {
            const getData = async () => {
                const data = await API.getUser();
                setUser(data)
            }

            getData();
        }
    }, [API])
    
    return <div className="profile_container">{user.name ? 
    <div className="profile_info">
        <div className="profile_name">
            <Avatar url={user.pfp} />
            <h1 className="username">{user.name}</h1>
        </div>
        <Divider />
        <div className="profile_action">
            <Button type="primary" disabled handleClick={() => console.log('bogdan hui')} icon={<UploadOutlined />}>Вывод средств</Button>
        </div>
        <Divider />
        <BalanceList balance={user.balance}/>
    </div> : 
    <Loader isLoading/>}</div>
}

export default ProfilePage