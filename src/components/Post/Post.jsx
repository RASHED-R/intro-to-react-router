import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    console.log(post)
    const { id, title } = post
    return (
        <div className='post-div'>
            <p>post: {title}</p>
            <Link to={`/post/${id}`}>Post ID</Link>
        </div>
    );
};

export default Post;