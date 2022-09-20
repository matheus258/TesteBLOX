import { Container } from '@mui/material';
import ButtonAppBar from '../../components/AppBar/AppBar';
import FormularioLogin from '../../components/FormLogin/FormLogin';
import { FormLogin } from './styled';

export function Login() {
    return (
        <FormLogin>
            <ButtonAppBar title='BLOX' text='cadastre-se' rota='/cadastro' />
            <Container maxWidth="sm">
                < FormularioLogin />
            </Container>

        </FormLogin>
    )
}