// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom'

import { Grid, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUp } from '../store/auth/auth.thunk'
import { UserRoles } from '../lib/constans/common'

const SigUpPage = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const emailChandeHandler = (e) => {
        setEmail(e.target.value)
    }
    const nameChandeHandler = (e) => {
        setName(e.target.value)
    }
    const passwordChandeHandler = (e) => {
        setPassword(e.target.value)
    }
    const confirmChandeHandler = (e) => {
        setConfirmPassword(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefalult()
        const data = {
            email,
            name,
            password,
            role: UserRoles.ADMIN,
        }

        dispatch(signUp(data))
    }
    return (
        <Grid display="flex" justifyContent="center" marginTop={20}>
            <Grid sx={{ background: '#fff', width: '500px', padding: '20px' }}>
                <form onSubmit={submitHandler}>
                    <Grid display="flex" flexDirection="column">
                        <TextField
                            value={name}
                            onChange={nameChandeHandler}
                            label="Name"
                        />
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
                        <TextField
                            value={confirmPassword}
                            onChange={confirmChandeHandler}
                            label="ConfirmPassword"
                        />
                        <Button type="submit">Sign Up</Button>
                        <Link to="/signin"> Have an account</Link>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default SigUpPage
