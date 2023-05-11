import { MetroSpinner } from "react-spinners-kit";

interface LoaderProps {
    isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
    return (
        <div className="spinner-center">
            <MetroSpinner size={70} color='#2678b6' loading={isLoading} />
        </div>
    )
}

export default Loader;