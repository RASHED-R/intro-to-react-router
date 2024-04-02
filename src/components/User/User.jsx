import { Link } from 'react-router-dom';
import './User.css'
const User = ({ user }) => {
    const { id, name, phone, email } = user;
    return (
        <div className='user-div'>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>click</Link>
        </div >
    );
};

export default User;