import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const { name } = user;
    return (
        <div>
            user Name: {name}
        </div>
    );
};

export default UserDetails;