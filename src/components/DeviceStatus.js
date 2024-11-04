// src/components/DeviceStatus.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';

function DeviceStatus() {
  const [devices, setDevices] = useState([
    { id: 1, name: '보일러', status: '연결됨', temperature: 28, heating: true },
    { id: 2, name: '거실 온도계', status: '연결됨', temperature: 26 },
    { id: 3, name: '안방 온도계', status: '연결 끊김', temperature: null },
    { id: 4, name: '거실 에어컨', status: '연결됨', temperature: 28, heating: false },
  ]);

  const handleTemperatureChange = (id, newTemperature) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id ? { ...device, temperature: newTemperature } : device
      )
    );
  };

  const toggleHeating = (id) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id ? { ...device, heating: !device.heating } : device
      )
    );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3 }}>
      <Typography variant="h5" align="center" gutterBottom>
        연결된 기기 및 상태
      </Typography>
      {devices.map((device) => (
        <Card key={device.id} sx={{ bgcolor: device.status === '연결됨' ? '#e0f7fa' : '#ffebee' }}>
          <CardContent>
            <Typography variant="h6">{device.name}</Typography>
            <Typography>상태: {device.status}</Typography>
            {device.temperature !== null && (
              <TextField
                label="온도 설정"
                type="number"
                value={device.temperature}
                onChange={(e) =>
                  handleTemperatureChange(device.id, Number(e.target.value))
                }
                margin="normal"
                disabled={device.status === '연결 끊김'}
              />
            )}
            {device.heating !== undefined && (
              <Button
                variant="contained"
                color={device.heating ? 'error' : 'success'}
                onClick={() => toggleHeating(device.id)}
                disabled={device.status === '연결 끊김'}
              >
                {device.heating ? '난방 끄기' : '난방 켜기'}
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default DeviceStatus;
