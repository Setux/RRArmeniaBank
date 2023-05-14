import { useContext, useEffect, useState } from "react";
import { apiContext } from "../../contexts/apiContext";
import { UserResponce } from "../../api";
import Divider from 'antd/lib/divider';
import Loader from "../../components/Loader/Loader";
import Avatar from "../../components/Avatar/Avatar";

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
    <div className="profile_info"><div className="profile_name"><Avatar url={user.pfp} /><h1 className="username">{user.name}</h1></div><Divider /></div> : 
    <Loader isLoading/>}</div>
}

export default ProfilePage