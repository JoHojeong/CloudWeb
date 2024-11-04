// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { ThemeProvider, createTheme, CssBaseline, Button, Box } from '@mui/material';
import './App.css';

// MUI 커스텀 테마 설정
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // 파란색 계열
    },
    secondary: {
      main: '#004ba0', // 다크 블루
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [user, setUser] = useState(null);

  const handleSignup = (userData) => {
    setUser(userData);
    setIsSigningUp(false);
  };

  const handleLogin = (credentials) => {
    if (user && user.username === credentials.username && user.password === credentials.password) {
      setIsAuthenticated(true);
    } else {
      alert('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="App" sx={{ textAlign: 'center', mt: 4 }}>
        {isAuthenticated ? (
          <Dashboard user={user} />
        ) : isSigningUp ? (
          <Signup onSignup={handleSignup} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
        {!isAuthenticated && (
          <Button
            variant="text"
            color="primary"
            onClick={() => setIsSigningUp(!isSigningUp)}
            sx={{ mt: 2 }}
          >
            {isSigningUp ? '로그인으로 돌아가기' : '회원가입'}
          </Button>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
