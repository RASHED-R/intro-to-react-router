import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const postDetails = useLoaderData();
    const { id, body } = postDetails;
    return (
        <div>
            post id: {id}
            <p>post body: {body}</p>
        </div>
    );
};

export default PostDetails;