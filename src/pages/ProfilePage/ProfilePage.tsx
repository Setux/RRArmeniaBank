import { useContext, useEffect, useState } from "react";
import { apiContext } from "../../contexts/apiContext";
import { UserResponce } from "../../api";
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
    
    return <div className="profile_container">{user.name ? <Avatar url={user.pfp} /> : <Loader isLoading/>}</div>
}

export default ProfilePage