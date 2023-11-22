import Axios from "axios";
import {useEffect} from "react";

function F1()
{
    //http request; we need to place inside the life cycle methods but
    //as we are working with function components i.e., no life cycle methods 
    //Instead we have a concept Hooks which helps us to handle the http request
    //useEffect() is used to handle the side effects

    useEffect(()=>{
        Axios.get()
    },[])

    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
}