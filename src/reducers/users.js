import  React from 'react';
import {Fetch_user} from "../actions/types";



// state is just an arryay of objects it is an array full of object
export  default  function (state=[],action) {

    switch (action.type){



        case Fetch_user:

// spread operator takes the two array as argument
            console.log(state);
            console.log(action.payload);
           return  [...state , ...action.payload.data];




    }


    return state;




}


