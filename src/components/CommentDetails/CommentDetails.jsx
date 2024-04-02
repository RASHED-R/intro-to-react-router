import { useLoaderData } from "react-router-dom";

const CommentDetails = () => {
    const commentDetails = useLoaderData();
    const { id, name, body } = commentDetails
    return (
        <div>
            <p>ID: {id}</p>
            <br />
            <p>Name: {name}</p>
            <br />
            <p>{body}</p>
        </div>
    );
};

export default CommentDetails;