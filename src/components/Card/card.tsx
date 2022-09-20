import { useEffect, useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
//Estilo
import EditCard from './styled';
// Api com lista de cursos.
import api from '../../api/api'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function BasicCard() {

  const [listaCurso, setListaCursos] = useState<any[]>([]);
  useEffect(() => {
    api.get('/').then(({ data }) => {
      setListaCursos(data)
    });
    console.log(listaCurso)
  }, ['']);
  // Variavel com valores do Array
  const cursos = listaCurso

  // Ver Map em um array
  console.log(cursos)

  return (
    <EditCard>
      {cursos.map(item => (
        <Box className='BoxStyled' sx={{ minWidth: 275, flexDirection: 'row', flexWrap: 'wrap', display: 'inline-flex', width: '23%' }} key={item.title} >
          <Card className='cardBox' sx={{ width: '100%', bgcolor: `${item.cached_blox.knowledge_area.color2}` }}>
            <React.Fragment>
              <Box sx={{ bgcolor: `${item.cached_blox.knowledge_area.color1}`, margin: 0 }}>
                <CardContent >
                  <Typography sx={{ fontSize: 17, display: 'inline-flex', flexWrap: 'wrap' }} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: 15 }} >
                    {'ID: '}{item.id}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} >
                    {'Modalidade: '}{item.modality}
                  </Typography>
                </CardContent>
              </Box>
              <CardActions sx={{ flexDirection: 'colum', display: 'flex', gridArea: 'sidebar' }}>
                <Typography variant="body2">
                  {'Responsavel: '}
                  {item.cached_blox.responsible.name}
                </Typography>
                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                <Checkbox
                  {...label}
                  icon={<BookmarkBorderIcon />}
                  checkedIcon={<BookmarkIcon />}
                />
                <Button size="small">Saiba Mais</Button>
              </CardActions>
            </React.Fragment>
          </Card>
        </Box>
      ))
      }
    </EditCard >
  );
}