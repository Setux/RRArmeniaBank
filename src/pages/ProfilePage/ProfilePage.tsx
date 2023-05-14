import { useContext, useEffect, useState } from "react";
import { apiContext } from "../../contexts/apiContext";
import { UserResponce } from "../../api";

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
    
    return <div>{user.name || 'loading'}</div>
}

export default ProfilePage