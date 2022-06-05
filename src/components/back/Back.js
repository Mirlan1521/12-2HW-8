import React from 'react';
import { useNavigate} from "react-router-dom";

const Back = () => {

    const navigate = useNavigate();

    const back = ()=>{
        navigate(-1);
    }
    return (
        <button onClick={back}>Back</button>

    );
};

export default Back;