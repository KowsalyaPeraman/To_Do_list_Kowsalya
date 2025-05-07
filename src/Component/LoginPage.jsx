import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useFormik } from "formik";
import * as Yup from "yup"
import { Link } from 'react-router-dom'

function LoginPage() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Not a valid email").required("email must be required"),
      password: Yup.string()
        .required('Password is required')
        .matches(/^(?=.*[A-Z])(?=.*\d).{6,}$/, 'Min 6 chars, 1 uppercase, 1 number'),
    }),
    onSubmit: (values) => {
      console.log("values", values)
    },

  })
  return (
    <>
 <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          height: '97vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(135deg, #00eaff, #4d358998, #badaff, #0025ce)'
        }}
      >
        <Box
          sx={{
            display: 'flex', flexDirection: 'column', gap: 2, padding: 5, backgroundColor: 'white', borderRadius: 2, boxShadow: 3, minWidth: '300px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }} Component='form' >

            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Email
            </Typography>
            <TextField type="email" label="Email" placeholder='Enter your email' variant="outlined" fullWidth
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email} />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Password
            </Typography>
            <TextField label="Enter your password" variant="outlined" type="password" fullWidth
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password} />
          </Box>
          <Button type="submit" disabled={!(formik.isValid && formik.dirty)} variant="outlined" sx={{
            width: '150px',
            marginLeft: '23%',
            marginTop: '9%',
            background: 'linear-gradient(135deg,rgba(0, 38, 206, 0.28), #00eaff)',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            '&:hover': {
              background: 'linear-gradient(135deg,rgba(0, 25, 167, 0.26), #00cce6)',
            },
          }} ><Link to="/sumbit" style={{textDecoration:'none',color:'black'}} >Submit</Link></Button>
        </Box>
      </Box>
      </form>

    </>
  )
}

export default LoginPage