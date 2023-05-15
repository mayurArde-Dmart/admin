import React, { useState } from 'react';

import './style.css';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { Box, Button, Collapse, IconButton, InputAdornment, Typography } from '@mui/material';
import { AccountBox, ArrowBack, ArrowForward, Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { get } from 'lodash-es';
import HeaderMenu from '../../components/HeaderMenu';
import { useNavigate } from 'react-router-dom';

export interface Props {
  children?: React.ReactNode;
  [name: string]: any;
}

const LoginPage: React.FC<Props> = ({ name }: Props) => {
  const navigate = useNavigate();
  const [mode, setMode] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const username = '';
  const userId = get(user, 'username', '');

  const handleSubmit = () => {
    navigate('/home', { replace: true });

    console.log('ka');
  };

  const handleChange = () => {
    console.log('ka');
  };
  const resetForm = () => {
    console.log('ka');
  };

  const SETPASSWORDMODE = ['update_password', 'set_password'];

  let submitButton = 'next';
  if (mode === 'enter_password') {
    submitButton = 'login';
  }
  if (SETPASSWORDMODE.includes(mode)) {
    submitButton = 'set password';
  }
  return (
    // ref pending
    <div className='login_root'>
      {username === '' && (
        <Typography variant='h6' className='login_title' align='center'>
          {SETPASSWORDMODE.includes(mode) ? 'Set Password' : 'Login'}
        </Typography>
      )}
      <ValidatorForm className='login_form' onSubmit={handleSubmit}>
        <TextValidator
          label='Username *'
          placeholder='Email-Id / Phone number/ Employee ID'
          onChange={handleChange}
          name='username'
          fullWidth
          autoComplete='true'
          // disabled={mode !== 'next'}
          variant='outlined'
          margin='normal'
          helperText={
            <Typography color={mode === 'next' ? 'primary' : 'textSecondary'} variant='caption'>
              Email-Id / Phone number/ Employee ID
            </Typography>
          }
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <AccountBox color='primary' />
              </InputAdornment>
            ),
          }}
          value={userId}
          validators={['required', 'isEmailOrPhoneNumber']}
          errorMessages={['Please enter a valid Email-Id/Phone number/Employee ID.', 'Please enter a valid Email-Id/Phone number/Employee ID.']}
        />
        <Collapse in={mode !== 'next'}>
          {mode !== 'next' && (
            <TextValidator
              label='Password *'
              onChange={handleChange}
              name='password'
              fullWidth
              variant='outlined'
              // inputRef={(ref) => {
              //   this._passWordRef = ref;
              // }}
              helperText={
                <Typography color='primary' variant='caption'>
                  Enter Password
                </Typography>
              }
              margin='normal'
              type={passwordVisible ? 'text' : 'password'}
              placeholder='Enter Password'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton size='small' onClick={() => setPasswordVisible(!passwordVisible)}>
                      {passwordVisible ? <VisibilityOff color='primary' /> : <Visibility color='primary' />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                shrink: true,
              }}
              value={user.password}
              validators={['required']}
              errorMessages={['Please enter a valid password.']}
            />
          )}
        </Collapse>
        <Collapse in={SETPASSWORDMODE.includes(mode)}>
          {SETPASSWORDMODE.includes(mode) && (
            <TextValidator
              label='Confirm password *'
              placeholder='Enter the new password again'
              onChange={handleChange}
              name='confirmPassword'
              fullWidth
              type={confirmPasswordVisible ? 'text' : 'password'}
              variant='outlined'
              helperText={
                <Typography color='primary' variant='caption'>
                  Repeat Password
                </Typography>
              }
              margin='normal'
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton size='small' onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                      {confirmPasswordVisible ? <VisibilityOff color='primary' /> : <Visibility color='primary' />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={user.confirmPassword}
              validators={['required', 'isPasswordMatch']}
              errorMessages={['Please enter a valid confirm password.', 'Password do not match.']}
            />
          )}
        </Collapse>
        {username === '' && !SETPASSWORDMODE.includes(mode) && (
          <Typography component='a' href='/forgotPassword' className='login_links' variant='subtitle2' color='inherit'>
            Forgot Password?
          </Typography>
        )}
        <Box className='login_submit'>
          {/* <LoadingButton loading={false}>
            {mode !== 'next' && username === '' ? (
              <Button
                // disabled={status === ActionStatus.LOADING}
                variant='contained'
                onClick={resetForm}
                startIcon={<ArrowBack />}
                color='primary'>
                Back
              </Button>
            ) : null}
          </LoadingButton> */}
          <div
          // className={clsx({
          //   [classes.displayFlex]: mode !== 'next' && username !== '',
          // })}
          >
            {mode !== 'next' && username !== '' ? (
              <LoadingButton>
                <Button
                  onClick={(e) => {
                    // AuthEvents.emit(MDFLOGOUT);
                  }}
                  // disabled={status === ActionStatus.LOADING}
                  variant='contained'
                  color='primary'
                  // className={classes.logout}
                >
                  Logout
                </Button>
              </LoadingButton>
            ) : null}
            <LoadingButton
            // loading={status === ActionStatus.LOADING}
            >
              <Button
                type='submit'
                // disabled={status === ActionStatus.LOADING}
                variant='contained'
                endIcon={mode === 'next' ? <ArrowForward /> : null}
                color='primary'
                onClick={handleSubmit}>
                {submitButton}
              </Button>
            </LoadingButton>
          </div>
        </Box>
      </ValidatorForm>
    </div>
  );
};

export default LoginPage;
