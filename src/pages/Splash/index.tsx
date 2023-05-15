import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer';
import { useDispatch } from 'react-redux';

export interface Props {
  children?: React.ReactNode;
  [name: string]: any;
}

const SplashPage: React.FC<Props> = ({ name }: Props) => {
  const dispatch = useDispatch();
  // const userState = useSelector<RootState, UserState>((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/login', { replace: true });
    }, 2000);
  }, []);

  return (
    <div className='splash-root'>
      <img className='splash-image' src='/dmart.png' alt='dmart logo' />
      <Typography classes={{ root: 'splash-title' }}>POS Admin</Typography>
      <Box className='splash-progress'>
        <LinearProgress color='primary' />
      </Box>
    </div>
  );
};

export default SplashPage;
