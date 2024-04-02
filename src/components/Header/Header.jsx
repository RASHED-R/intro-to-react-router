import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return (
        <div className="header">
            <Link to="/about">About Us</Link >
            <Link to="/blogs">Blogs</Link >
            <Link to="/services">Services</Link >
            <Link to="/users">Users</Link >
            <Link to="/posts">Posts</Link >
            <Link to="/comments">Comments</Link >
            <Link to="/contact-Us">Contact Us</Link >
        </div>
    );
};

export default Header;