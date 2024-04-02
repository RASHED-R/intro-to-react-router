
import { useLoaderData } from 'react-router-dom';
import './Posts.css'
import Post from '../Post/Post';
const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            posts length: {posts.length}

            <div className='posts-div'>
                {
                    posts.map(post => <Post post={post} key={post.id}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;