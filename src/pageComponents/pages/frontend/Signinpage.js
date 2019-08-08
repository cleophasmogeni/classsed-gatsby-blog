import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import * as actions from '../../../store/actions';
import styled from 'styled-components';
import Button from '../../Forms/Buttons';
import  Input from '../../Forms/Inputs';
import  Message from '../../../Messages';
import { FormWrapper, StyledForm } from '../../../HOC/layout/element';

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
  confirmPassword:Yup.string()
  .oneOf([Yup.ref('password'), null], 'password do not match')
  .required('confirm your password'),
  
})

const MessageWrapper = styled.div`
  position: absolute;
  bottom: -2rem;
`;

const Heading= styled.div`
  width: 100%;
  align-self: flex-start;
  height: 100%;
  min-height: calc(100vh - 6rem);
  background-color: var(--color-mainLight);
`;

const SignUp = ({signUp, loading, error, cleanUp})=>{
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
      confirmPassword:''
    }} 
    validationSchema={signUpSchema}
    onSubmit={async (values, {setSubmitting})=>{
      await signUp(values);
      setSubmitting(false);
    }}
    >
    {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Sign up for an account
          </Heading>
          {/* <Heading bold size="h4" color="white">
            Fill in your details to register your new account
          </Heading> */}
          <StyledForm>
            <Field
              type="text"
              name="username"
              placeholder="Username ..."
              component={Input}
            />            
            <Field
              type="email"
              name="email"
              placeholder="Your email..."
              component={Input}
            />
            <Field
              type="password"
              name="password"
              placeholder="Your password..."
              component={Input}
            />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Re-type your password..."
              component={Input}
            />
            <Button
              disabled={!isValid || isSubmitting}
              loading={loading ? 'Signing up...' : null}
              type="submit"
            >
              Sign up
            </Button>
            <MessageWrapper>
              <Message error show={error}>
                {error}
              </Message>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}

    </Formik>
  )
}
const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});

const mapDispatchToProps = {
  signUp: actions.signUp,
  cleanUp: actions.clean,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
