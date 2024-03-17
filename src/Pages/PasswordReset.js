import React from 'react';
import { Box, Stack, Paper, Typography, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // Import Yup for form validation
import passwordReset from '../Assets/passwordReset.png';

const PasswordReset = () => {
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
    onSubmit: (values) => {
      console.log(values); 
      // Add your password reset logic here, such as sending a request to your backend
    }
  });

  return (
    <Box
      sx={{
        backgroundColor: '#FAFAFF',
        width: '100%',
        height: '100%',
        zIndex: -1,
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
              <img src={passwordReset} alt="login" style={{ height: '500px' }} />
            </Box>
            <form onSubmit={formik.handleSubmit} style={{ marginLeft: '50px', marginRight: '50px' }}>
              <Stack mt={10} mb={4}>
                <Typography variant="h6" sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }} mb={1}>
                  Password Recovery: Quick<br /> and Easy
                </Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 'Light' }} mb={3}>
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
                />
              </Stack>
              <Stack mb={5}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ width: '60%', marginLeft: '106px', fontFamily: 'Poppins', fontWeight: 'bold' }}
                >
                  Change Password
                </Button>
              </Stack>
            </form>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default PasswordReset;
