// import React, { useState } from 'react'
import styled from 'styled-components'
// import Basket from '../components/basket/Basket'
import { Header } from '../components/header/Header'
import { Meals } from '../components/meals/Meals'
// import { Summary } from '../components/summary/Summary'

const AdminLayout = () => {
    return (
        <div>
            <Header />
            <Container>Admin Layout</Container>
            <Meals />
        </div>
    )
}

export default AdminLayout

const Container = styled.h1`
    margin-top: 300px;
    display: flex;
    justify-content: center;
    color: #ffff;
`
