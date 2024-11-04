// src/components/Login.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 350,
        margin: 'auto',
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: 'background.paper',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" color="primary" gutterBottom>
        클라우드 주식회사
      </Typography>
      <Typography variant="h6" gutterBottom>
        로그인
      </Typography>
      <TextField
        label="아이디"
        variant="outlined"
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <TextField
        label="비밀번호"
        type="password"
        variant="outlined"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
      >
        로그인
      </Button>
    </Box>
  );
}

export default Login;
