import React from "react"
import { API } from "../api"
import { webAppContext } from "./appContext";

interface Props {
    children: React.ReactNode;
}

export const apiContext = React.createContext<API>({} as API)

const ApiProvider = ({children}: Props) => {
    const [api, setApi] = React.useState({} as API);

    const app = React.useContext(webAppContext);

    React.useEffect(() => {
        if (app) {
            setApi(new API(app.initDataUnsafe.user.id))
        }
    }, [app])

    return(
        <apiContext.Provider value={api}>{children}</apiContext.Provider>
    )
}

export default ApiProvider;