import './styles/user.scss'

export default function User({ user }) {

    const style = { backgroundImage: `url(${user.picture})` }

    return <div className='appart_flex_top'>
        <div className='appart_flex_top_name'>{user.name}</div>
        <div className='appart_flex_top_picture' style={style}></div>
    </div>
}