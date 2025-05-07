import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

function ToDoPage() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([
    "Update LinkedIn profile",
    "Complete React login page",
    "Add form validation with Yup",
    "Create logout button"
  ]);

  const navigate = useNavigate();

  const handleAdd = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // optional: if you're using login state
    navigate('/login'); // replace with your actual login route
  };

  return (
    <Box sx={{ p: 4, minHeight: '100vh', background: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom>
        To-Do List
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          label="New Task"
          variant="outlined"
          fullWidth
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </Box>

      <List>
        {todos.map((item, index) => (
          <ListItem key={index} sx={{ bgcolor: 'white', mb: 1, borderRadius: 1 }}>
            <ListItemText primary={`• ${item}`} />
          </ListItem>
        ))}
      </List>

      <Button
        variant="outlined"
        color="error"
        onClick={handleLogout}
        sx={{ mt: 4 }}
      >
        Logout
      </Button>
    </Box>
  );
}

export default ToDoPage;
