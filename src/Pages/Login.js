import React, { useState } from 'react';
import { Box, Paper, Button, Stack, Typography, Link, TextField, CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import login from '../Assets/login.png';
import * as Yup from 'yup';
import axios from 'axios';

const Login = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required')
    }),
    onSubmit: async (values) => {
      setSubmitting(true);
      try {
        // Send login request to backend using Axios
        const response = await axios.post('https://your-api-url/login', values);
        console.log(response.data); // Assuming your backend returns data upon successful login
        setSubmitSuccess(true);
        setSubmitError('');
      } catch (error) {
        setSubmitting(false);
        console.error('Error during login:', error.response.data);
        setSubmitSuccess(false);
        setSubmitError(error.response.data.message || 'An error occurred during login.');
      }
    }
  });

  return (
    <Box
      sx={{
        backgroundColor: '#FAFAFF',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <Paper elevation={5}>
          <Stack direction="row">
            <Box sx={{ display: { lg: 'block', xs: 'none' } }}>
              <img src={login} alt="login" style={{ height: '500px' }} />
            </Box>
            <form onSubmit={formik.handleSubmit} style={{ marginLeft: '50px', marginRight: '50px' }}>
              <Stack mt={10} mb={4}>
                <Typography variant="h6" sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }} mb={1}>
                  Hello! Welcome back
                </Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 'Light' }} mb={3}>
                  Log in with your data provided by <br /> the administration
                </Typography>
                <TextField
                  type="text"
                  id="email"
                  name="email"
                  label="E-mail"
                  variant="outlined"
                  sx={{ width: '300px' }}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  disabled={submitting || submitSuccess}
                />
              </Stack>
              <Stack mb={3}>
                <TextField
                  name="password"
                  id="password"
                  type="password"
                  label="Password"
                  sx={{ width: '300px' }}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  disabled={submitting || submitSuccess}
                />
              </Stack>
              <Stack mb={5}>
                <Link href="/Forgetpassword" mb={4} sx={{ fontFamily: 'Poppins', fontWeight: 'Light' }}>
                  Forgot password?
                </Link>
                {submitError && (
                  <Typography variant="body2" color="error" mb={2}>
                    {submitError}
                  </Typography>
                )}
                {submitting && <CircularProgress size={24} sx={{ color: 'primary.main' }} />}
                {!submitSuccess && !submitting && (
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={submitting}
                    sx={{ width: '50%', marginLeft: '150px', fontFamily: 'Poppins', fontWeight: 'bold' }}
                  >
                    Log in
                  </Button>
                )}
              </Stack>
            </form>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;
