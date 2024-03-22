import React from 'react';
import { Box, Typography, Stack, Paper, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import forgotpassword from '../Assets/forgotpassword.png';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import * as Yup from 'yup';

const initialValues = {
  email: ''
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Please enter your email')
});

const Forgetpassword = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
      // Add your password reset logic here, such as sending a request to your backend
    },
    validationSchema
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
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Paper elevation={5}>
          <Stack direction="row">
            <Box sx={{ display: {lg: 'block', xs: 'none'}}}>
              <img src={forgotpassword} alt="forgot password" style={{ height: '500px' }} />
            </Box>
            <form onSubmit={formik.handleSubmit} style={{ marginLeft: '50px', marginRight: '50px' }}>
              <Stack mt={15} mb={4}>
                <Typography variant="h6" sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }} mb={1}>
                  Reset Your Password Now
                </Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 'Light' }} mb={3}>
                  Securing your account with a new<br /> Password
                </Typography>
                <TextField
                  type="text"
                  id="email"
                  name="email"
                  label="E-mail"
                  variant="outlined"
                  sx={{ width: '400px' }}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Stack>
              <Stack mb={5}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ width: { lg: '64%', xs: '100%' }, marginLeft: { lg: '144px', xs: '0px' }, fontFamily: 'Poppins', fontWeight: 'bold' }}
                >
                  Send Reset Password Email
                </Button>
                <Button
                  href="/Login"
                  variant="text"
                  startIcon={<ChevronLeftIcon />}
                  sx={{ color: '#000', marginTop: '40px', fontFamily: 'Poppins', fontWeight: 'Light' }}
                >
                  Log in page
                </Button>
              </Stack>
            </form>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default Forgetpassword;
