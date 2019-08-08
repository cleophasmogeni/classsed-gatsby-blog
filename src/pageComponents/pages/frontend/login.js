import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import '../../../Auth/utilizewebAuth/css/style.css';
import Navbar from '../../layout/frontlayout/Navbar';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions';
import Input from '../../Forms/Inputs';

const LoginSchema = Yup.object().shape({   
    email:Yup.string()
    .email('invalid email')
    .required('Email is required'),
    password: Yup.string()
    .required('password is required')   
    
  })

const Login = ({login, loading, error, cleanUp}) =>{

    useEffect(() => {
        return () => {
          cleanUp();
        };
      }, [cleanUp]);
    
      return (
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await login(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid }) => (
                <body>
    
    <div class="main-top-intro">
        <div class="bg-layer">
           
            <div class="wrapper">

                <Navbar />

                {/* <!-- //header --> */}
                <div class="content-inner-info">
                    <h2>Login now</h2>
                    <div class="content-w3layouts-main">

                        <div class="form-w3ls-left-info">
                            <Form >
                               
                                <Field 
                                type="email" 
                                placeholder="Email Address" 
                                name="email"
                                component={Input}
                                 />
                                <Field type="password" 
                                placeholder="Password" 
                                name="password" 
                                component={Input}
                                />                                
                                <div class="links">
                                    <p><a href="/">Forgot Password?</a></p>
                                </div>
                                <div class="bottom">
                                    <button class="btn" type="submit"
                                    disabled={!isValid || isSubmitting}
                                        loading={loading ? 'Logging in...' : null}
                                    >Log In</button>
                                   <Link to ="/signup"> <button class="btn reg" type="reset">Sign Up</button> </Link>
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

const mapStateToProps = ({ auth }) => ({
    loading: auth.loading,
    error: auth.error,
  });
  
  const mapDispatchToProps = {
    login: actions.signInEmail,
    cleanUp: actions.clean,
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);