import React from 'react';
import {useParams} from "react-router-dom";


const Blog = () => {
    const  params = useParams();


    return (
        <div>
            <h1>{params.blog}</h1>


            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nesciunt nobis sint vero. Alias aliquid cumque laudantium maiores non quia suscipit. Animi error id ipsam ipsum modi repudiandae temporibus, voluptas!</p>
        </div>
    );
};

export default Blog;