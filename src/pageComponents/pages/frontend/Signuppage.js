import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
//import styled from 'styled-components';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import '../../../Auth/utilizewebAuth/css/style.css';
import Navbar from '../../layout/frontlayout/Navbar';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions';
import Input from '../../Forms/Inputs/';

const signUpSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Too short')
      .max(15, 'Too long'),
    email:Yup.string()
    .email('invalid email')
    .required('Email is required'),
    password: Yup.string()
    .required('password is required')
    .min(8, 'password is to short'),
    confirmpassword:Yup.string()
    .oneOf([Yup.ref('password'), null], 'password do not match')
    .required('confirm your password'),
    
  })

const Login = ({signUp, loading, error, cleanUp}) =>{

    useEffect(() => {
    
        return () => {
          cleanUp();
        };
      }, [cleanUp]);


    return(
        <Formik
        initialValues={{
      username:'',
      email:'',
      password:'',
      confirmpassword:''
    }} 
    validationSchema={signUpSchema}
    onSubmit={async (values, {setSubmitting})=>{
      await signUp(values);
      setSubmitting(false);
    }}
        >
            { ({ isSubmitting, isValid }) =>(
                <body>
    
    <div class="main-top-intro">
        <div class="bg-layer">
           
            <div class="wrapper">

                <Navbar />

                {/* <!-- //header --> */}
                <div class="content-inner-info">
                    <h2>Sign up now</h2>
                    <div class="content-w3layouts-main">

                        <div class="form-w3ls-left-info">
                            <Form >

                                <Field type="text" placeholder="Username" name="username" component={Input} />
                                <Field type="email" placeholder="Email Address" name="email" component={Input} />
                                <Field type="password" placeholder="Password" name="password" component={Input} />
                                <Field type="password" placeholder="Confirm Password" name="confirmpassword" component={Input} />
                                
                                <div class="bottom">
                                    <button class="btn" 
                                    disabled={!isValid || isSubmitting}
                                    loading={loading ? 'Signing up...' : null}
                                    type="submit"
                                   >Sign Up</button>
                                   <Link to ="/login"> <button class="btn reg" type="reset">Sign In</button> </Link>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>               
            </div>
        </div>
    </div>
    {/* <!-- //main --> */}

</body>
            )
            }
        </Formik>
    )

}

const mapStateToProps = ({auth}) =>({
    loading: auth.loading,
    error: auth.error,

})
const mapDispatchToProps ={
    signUp: actions.signUp,
    cleanUp: actions.clean


}

export default connect(mapStateToProps,mapDispatchToProps) (Login);