import AntButton from 'antd/lib/button'

interface Props {
    disabled?: boolean;
    icon?: React.ReactNode;
    handleClick: () => void;
    children: React.ReactNode;
}

const Button = ({disabled, icon, handleClick, children}: Props) => {
    return <AntButton disabled={disabled} icon={icon} onClick={() => handleClick()}>{children}</AntButton>
}

export default Button;