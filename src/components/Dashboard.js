// src/components/Dashboard.js
import React from 'react';
import DeviceStatus from './DeviceStatus';
import TemperatureControl from './TemperatureControl';
import { Typography, Box, Card, CardContent } from '@mui/material';

function Dashboard({ user }) {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" color="primary" align="center" gutterBottom>
        클라우드 주식회사
      </Typography>
      <Card sx={{ maxWidth: 400, margin: 'auto', marginBottom: 4, boxShadow: 2 }}>
        <CardContent>
          <Typography variant="h6">기본 정보</Typography>
          <Typography>이름: {user.username}</Typography>
          <Typography>이메일: {user.email}</Typography>
        </CardContent>
      </Card>
      <TemperatureControl /> {/* 온도 조절 컴포넌트 추가 */}
      <DeviceStatus />
    </Box>
  );
}

export default Dashboard;
