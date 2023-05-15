import { Typography, Container, Grid, ButtonBase, Link } from '@mui/material';
import Button from '@mui/material/Button';
import { get } from 'lodash-es';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../reducer';

import './style.css';
import HeaderMenu from '../../components/HeaderMenu';

export interface Props {
  children?: React.ReactNode;
  [name: string]: any;
}

const HomePage: React.FC<Props> = ({ name }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const cashCounter = useSelector<RootState, CashCounter>((state) => state.user.cashCounter);

  // const isCashCounterOpen = get(cashCounter, 'isCashCounterOpen', false);

  return (
    <>
      <HeaderMenu />
      <div id='home' className='home-root'>
        <Container maxWidth='xl' style={{ marginTop: 32 }}>
          <Grid container spacing={6}>
            <Grid item>
              <Button
                component={Link}
                className='home-btn-tile'
                onClick={() => {
                  navigate('/terminal-configuration', { replace: true });
                }}>
                <img src='/logo-mera.png' className='home-btn-tile-image' alt='pos sale logo' />
                <Typography align='center' variant='subtitle2' className={'home-btn-tile-text'}>
                  Terminal Config
                </Typography>
              </Button>
            </Grid>

            <Grid item>
              <Button
                component={Link}
                className='home-btn-tile'
                onClick={() => {
                  navigate('/sales-return');
                }}>
                <img src='/logo-mera.png' className='home-btn-tile-image' alt='pos sale logo' />
                <Typography align='center' variant='subtitle2' className={'home-btn-tile-text'}>
                  Master
                </Typography>
              </Button>
            </Grid>

            <Grid item>
              <Button component={Link} className='home-btn-tile'>
                <img src='/logo-mera.png' className='home-btn-tile-image' alt='pos sale logo' />
                <Typography align='center' variant='subtitle2' className={'home-btn-tile-text'}>
                  User
                </Typography>
              </Button>
            </Grid>

            <Grid item>
              <Button component={Link} className='home-btn-tile'>
                <img src='/logo-mera.png' className='home-btn-tile-image' alt='pos sale logo' />
                <Typography align='center' variant='subtitle2' className={'home-btn-tile-text'}>
                  Orders
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
