import AntAvatar from 'antd/lib/avatar'

interface Props {
    url: string;
}

const Avatar = ({url}: Props) => {
    return <AntAvatar size={120} shape='circle' src={url} />
}

export default Avatar