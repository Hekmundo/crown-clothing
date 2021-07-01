import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';
import {
  FormContainer as SignUpContainer,
  Title,
  ButtonsContainer,
} from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignUp = () => {
  const dispatch = useDispatch();
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  // ! remove this async code
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    dispatch(signUpStart({ displayName, email, password }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <Title>I do not have an account</Title>
      <span>Create an account with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          id='displayName'
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          id='signUpEmail'
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          id='signUpPassword'
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          id='confirmSignUpPassword'
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <ButtonsContainer>
          <CustomButton type='submit'>Sign up</CustomButton>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
