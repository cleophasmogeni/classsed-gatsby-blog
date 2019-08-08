import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Order extends React.Component{

    render(){
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to="/" />  
        return(
            <div className="">
                <h1>Order page</h1>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        auth:state.firebase.auth
    }

}

export default connect(mapStateToProps)(Order);