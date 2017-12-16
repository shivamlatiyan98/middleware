
export  default  function ({dispatch}) {

    return next =>action=>{


        if(!action.payload||!action.payload.then){

           return next(action);
        }



        console.log(action , 'we have a promise');


        action.payload.then(response=>{

               dispatch({
                   ...action,
                   payload:response

               })


        });



       // next(action);

    }


    // return function (next) {
    //
    //     return  function (action) {
    //
    //         console.log(action);
    //              next(action);
    //
    //
    //
    //     }
    // }




}





















