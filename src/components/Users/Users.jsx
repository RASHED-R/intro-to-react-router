
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import "./Users.css"

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            Total Users: {users.length}
            <div className='users-div'>
                {
                    users.map(user => <User user={user} key={user.id}></User>)
                }
            </div>
        </div>
    );
};

export default Users;