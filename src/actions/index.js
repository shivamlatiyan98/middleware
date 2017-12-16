import  React from 'react';
import {Fetch_user} from "./types";



import axios from 'axios';





// user is an object of type deatails

export default function fetchuser (user) {

console.log('action is called');

const request=axios.get('https://jsonplaceholder.typicode.com/users');




// returning the sttatic list of users
    return{
        type:Fetch_user,
        payload:request,


    }






}



