import { Link } from 'react-router-dom';
import './Comment.css'
const Comment = ({ comment }) => {
    console.log(comment)
    const { email, name, id } = comment
    return (
        <div className='comment-div'>
            comment name: {name}
            <br />
            <br />
            comment email: {email}
            <br />
            <br />
            <Link to={`/comment/${id}`}>Comment ID</Link>
        </div>
    );
};

export default Comment;