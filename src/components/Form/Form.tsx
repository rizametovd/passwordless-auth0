import { Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';

const Form: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e: any) => {
    setEmail(e.target.value)
  }

  const handleSubmit = () => {
  }


  return (
    <Stack sx={{
        width: '600px',
        margin: '200px auto',
        gap: '20px',
        background: 'pink',
        padding: '40px',
        borderRadius: '10px'
    }}>
      <TextField value={email} onChange={handleChange} label={'email'} />
      <Button variant="contained" onClick={handleSubmit}>Войти</Button>
    </Stack>
  );
};

export default Form;
