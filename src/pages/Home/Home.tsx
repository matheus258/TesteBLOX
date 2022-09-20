import React, { Component, useEffect } from 'react'
import ButtonAppBar from '../../components/AppBar/AppBar';
import BasicCard from '../../components/Card/card';
import HomeStyled from './styled';
import Container from '@mui/material/Container';

export function Home() {

    return (
        <>
            <ButtonAppBar text={'Sair'} rota={'/'} title={'BLOX'} />
            <HomeStyled>
                <Container maxWidth="xl">
                    <div className='titleHome'>
                        <h1>Escolha seu curso</h1>
                    </div>
                    <BasicCard />
                </Container>
            </HomeStyled>


        </>);
}


