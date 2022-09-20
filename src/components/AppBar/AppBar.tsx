import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import HeaderPages from './Styled';
import { Link } from 'react-router-dom';

type ButtonProps = {
    text: string;
    rota: string;
    title: string;
}

// const TitleButton = ({ text }: ButtonProps) => {
//     return <p>{text}</p>;
// }

export default function ButtonAppBar({ title, text, rota }: ButtonProps) {
    return (
        <HeaderPages>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {title}
                        </Typography>
                        <Link to={rota}> <Button color="inherit">{text}</Button></Link>

                    </Toolbar>
                </AppBar>
            </Box>
        </HeaderPages>

    );
}