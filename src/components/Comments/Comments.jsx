
import { useLoaderData } from 'react-router-dom';
import './comments.css'
import Comment from '../Comment/Comment';
const Comments = () => {
    const comments = useLoaderData();
    console.log(comments)
    return (
        <div>
            Comments total: {comments.length}
            <div className='comments-div'>
                {
                    comments.map(comment => <Comment comment={comment} key={comment.id}></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;