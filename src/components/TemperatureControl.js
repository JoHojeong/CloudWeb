// src/components/TemperatureControl.js
import React, { useState } from 'react';
import CircularSlider from 'react-circular-slider';
import { Box, Typography } from '@mui/material';

function TemperatureControl() {
  const [temperature, setTemperature] = useState(20); // 기본 온도 설정

  const handleTemperatureChange = (value) => {
    setTemperature(value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#f0f2f5',
        maxWidth: 300,
        margin: 'auto',
      }}
    >
      <Typography variant="h5" color="primary" gutterBottom>
        온도 조절
      </Typography>
      <CircularSlider
        width={200}
        height={200}
        label="온도"
        min={16}
        max={30}
        dataIndex={temperature - 16} // 최소값이 16이므로 데이터 인덱스 조정
        knobColor="#1976d2"
        progressColorFrom="#1976d2"
        progressColorTo="#ff5722"
        progressSize={8}
        trackColor="#eeeeee"
        trackSize={8}
        onChange={handleTemperatureChange}
      />
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        {temperature}°C
      </Typography>
    </Box>
  );
}

export default TemperatureControl;
