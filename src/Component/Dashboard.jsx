import React, { useState } from 'react';
import {Box,Typography,Button,TextField,Grid,Card,CardContent,IconButton} from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DeleteIcon from '@mui/icons-material/Delete';

function Dashboard() {
  const [todo, setTodo] = useState([]);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      description: Yup.string().required('Description is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      setTodo([...todo, values]);
      resetForm();
    },
  });

  const handleDelete = (indexToRemove) => {
    const updatedTodos = todo.filter((_, index) => index !== indexToRemove);
    setTodo(updatedTodos);
  };

  return (
    <>
      <Box sx={{ background: 'linear-gradient(135deg, #00eaff, #4d358998, #badaff, #0025ce)', p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ color: 'white' }}>To-Do List</Typography>
          <Button
            variant="outlined"
            sx={{
              background: 'linear-gradient(135deg,rgba(0, 38, 206, 0.28), #00eaff)',
              color: 'white',
              fontWeight: 'bold',
              border: 'none',
              '&:hover': {
                background: 'linear-gradient(135deg,rgba(0, 25, 167, 0.26), #00cce6)',
              },
            }}
          >
            <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Logout</Link>
          </Button>
        </Box>
      </Box>

      <Box component="form" onSubmit={formik.handleSubmit} sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            name="title"
            label="Title"
            variant="outlined"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            name="description"
            label="Description"
            variant="outlined"
            multiline
            rows={3}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
          <Button variant="contained" type="submit">Add Task</Button>
        </Box>
      </Box>

      <Box sx={{ p: 4 }}>
        <Grid container spacing={3}>
          {todo.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                variant="outlined"
                sx={{
                  position: 'relative',
                  p: 2,
                  borderRadius: 3,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <IconButton
                  onClick={() => handleDelete(index)}
                  sx={{ position: 'absolute', top: 10, right: 10 }}
                  aria-label="delete"
                >
                  <DeleteIcon color="error" />
                </IconButton>
                <CardContent sx={{ pt: 1.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', wordWrap: 'break-word' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, wordWrap: 'break-word', color: 'text.secondary' }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Dashboard;
