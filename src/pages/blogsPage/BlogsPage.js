import React from 'react';
import {Link} from "react-router-dom";

const BlogsPage = () => {
    return (
        <div>
            <h1>blogs page</h1>

            <ul>
                <li>
                    <Link to="/blogs/blog1" state={{name:"blog1"}}>blog1</Link>
                </li>
                <li>
                    <Link to="/blogs/blog2">blog2</Link>
                </li>
            </ul>
        </div>
    );
};

export default BlogsPage;