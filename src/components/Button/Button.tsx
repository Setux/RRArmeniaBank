import AntButton from 'antd/lib/button'

interface Props {
    disabled?: boolean;
    icon?: React.ReactNode;
    handleClick: () => void;
    children: React.ReactNode;
    type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed"
}

const Button = ({disabled, icon, handleClick, children, type}: Props) => {
    return <AntButton disabled={disabled} icon={icon} onClick={() => handleClick()} type={type}>{children}</AntButton>
}

export default Button;