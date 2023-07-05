import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';

import LoginPage from './LoginPage';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PC Express SAS
            </Typography>
            <Button component={Link} to="/" color="inherit">
              Inicio
            </Button>
            <Button component={Link} to="/login" color="inherit">
              Iniciar Sesión
            </Button>
          </Toolbar>
        </AppBar>

        <Box sx={{ p: 2 }}>
          <TextField label="Buscar" variant="outlined" fullWidth />

          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
            <Card sx={{ maxWidth: 345, margin: '10px' }}>
              <CardMedia component="img" height="140" image="https://via.placeholder.com/150" alt="Product" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Producto 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Descripción del producto.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <Button variant="outlined" size="small">
                    Detalle
                  </Button>
                  <Typography variant="subtitle1" color="text.secondary">
                    Estado: Activo
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 345, margin: '10px' }}>
              <CardMedia component="img" height="140" image="https://via.placeholder.com/150" alt="Product" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Producto 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Descripción del producto.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <Button variant="outlined" size="small">
                    Detalle
                  </Button>
                  <Typography variant="subtitle1" color="text.secondary">
                    Estado: Inactivo
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <Switch>
          <Route path="/login">
            {isLoggedIn ? <Redirect to="/" /> : <LoginPage />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
