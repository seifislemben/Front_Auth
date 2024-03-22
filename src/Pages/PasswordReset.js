import React, { useState } from 'react';
import { Box, Stack, Paper, Typography, TextField, Button, CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // Import Yup for form validation
import passwordReset from '../Assets/passwordReset.png';
import axios from 'axios';

const PasswordReset = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: '',
      cpassword: ''
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().required('Password is required'),
      cpassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required')
    }),
    onSubmit: async (values) => {
      setSubmitting(true);
      try {
        // Send password reset request to backend using Axios
        const response = await axios.post('https://your-api-url/reset-password', values);
        console.log(response.data); // Assuming your backend returns data upon successful password reset
        setSubmitSuccess(true);
        setSubmitError('');
      } catch (error) {
        setSubmitting(false);
        console.error('Error during password reset:', error.response.data);
        setSubmitSuccess(false);
        setSubmitError(error.response.data.message || 'An error occurred during password reset.');
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
              <img src={passwordReset} alt="password reset" style={{ height: '500px' }} />
            </Box>
            <form onSubmit={formik.handleSubmit} style={{ marginLeft: '50px', marginRight: '50px' }}>
              <Stack mt={10} mb={4}>
                <Typography variant="h6" sx={{ fontFamily: 'Poppins', fontWeight: 'bold', color: '#212121' }} mb={1}>
                  Password Recovery: Quick<br /> and Easy
                </Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 'light', color: '#757575' }} mb={3}>
                  Regain Access to Your Account Instantly
                </Typography>
                <TextField
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  sx={{ width: '300px' }}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  disabled={submitting || submitSuccess}
                />
              </Stack>
              <Stack mb={3}>
                <TextField
                  name="cpassword"
                  id="cpassword"
                  type="password"
                  label="Confirm Password"
                  sx={{ width: '300px' }}
                  onChange={formik.handleChange}
                  value={formik.values.cpassword}
                  error={formik.touched.cpassword && Boolean(formik.errors.cpassword)}
                  helperText={formik.touched.cpassword && formik.errors.cpassword}
                  disabled={submitting || submitSuccess}
                />
              </Stack>
              <Stack mb={5}>
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
                    sx={{ width: '60%', marginLeft: '106px', fontFamily: 'Poppins', fontWeight: 'bold' }}
                  >
                    Change Password
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

export default PasswordReset;

