// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom'

import { Grid, TextField, Button } from '@mui/material'
import React, { useState } from 'react'

const SignInPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const emailChandeHandler = (e) => {
        setEmail(e.target.value)
    }
    const passwordChandeHandler = (e) => {
        setPassword(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefalult()
    }
    return (
        <Grid display="flex" justifyContent="center" marginTop={20}>
            <Grid sx={{ background: '#fff', width: '400px', padding: '20px' }}>
                <form onSubmit={submitHandler}>
                    <Grid display="flex" flexDirection="column">
                        <TextField
                            value={email}
                            onChange={emailChandeHandler}
                            label="Email"
                        />
                        <TextField
                            value={password}
                            onChange={passwordChandeHandler}
                            label="Password"
                        />
                        <Button>Sign In</Button>
                        <Link to="/signup">Dont have an account</Link>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default SignInPage
