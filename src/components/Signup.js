// src/components/Signup.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function Signup({ onSignup }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    onSignup({ username, email, password });
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
        회원가입
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
        label="이메일"
        type="email"
        variant="outlined"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      <TextField
        label="비밀번호 확인"
        type="password"
        variant="outlined"
        margin="normal"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
      >
        회원가입
      </Button>
    </Box>
  );
}

export default Signup;
