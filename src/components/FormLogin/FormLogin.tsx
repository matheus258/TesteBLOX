import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormLogin from './Styled';
import axios from 'axios';
import { useEffect, useState } from 'react';


const theme = createTheme();
// Uso da API para Login;

// const [data, setData] = useState({
//     email: "",
//     password: ""
// });
// const handleChange = (e) => {
//     const value = e.target.value;
//     setData({
//         ...data,
//         [e.target.name]: value
//     });
// };
// const handleSubmit = (e) => {
//     e.preventDefault();
//     const userData = {
//         email: data.email,
//         password: data.password
//     };
//     axios.post("https://api-dev.blox.education/v2/authentication/login", userData).then((response) => {
//         console.log(response.status);
//         console.log(response.data.token);
//     });
// };


export default function FormularioLogin() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    // Criacao de elementos de Login
    return (
        <FormLogin className="login-wrapper">
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar className='avatar-login' sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LoginOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Seja bem-vindo!
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Usuario"
                                name="email"
                                autoComplete="email"
                                autoFocus

                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Senha"
                                type="password"
                                id="password"
                                autoComplete="current-password"

                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="lembrar senha"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Entrar
                            </Button>

                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </FormLogin>

    );
}
