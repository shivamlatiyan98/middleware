import  React,{Component} from 'react';

import {connect} from 'react-redux';
import fetchuser from "../actions";




class Userlist extends  Component{



    renderuser(user){

   console.log('called');

        return(
        <div className="card card-block">

            <h4 className="card-title"> {user.name}</h4>

             <p className="card-text" >
                 {user.company.name}
             </p>
            <a className="btn btn-primary" href={user.website}>
                  website

            </a>




        </div>

        );

    }


    componentWillMount(){
        this.props.fetchuser();

    }


    render(){



    return (
    <div className='user-list'>

        {this.props.users.map(this.renderuser)}




    </div>





    );



    }


}





function mapstatetoprops(state) {

    return{
        users:state.users
    }


}







export default connect(mapstatetoprops, { fetchuser})(Userlist);
