// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom'

import React from 'react'
import UserLayout from '../layout/UserLayout'
import MealsPage from '../pages/Meals'
import SignInPage from '../pages/SignIn'
import SignUpPage from '../pages/SignUp'
import AdminLayout from '../layout/AdminLayout'

const AppRouts = () => {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<MealsPage />} />
                <Route path="signup" element={<SignUpPage />} />
                <Route path="signin" element={<SignInPage />} />
                <Route path="/admin" element={<AdminLayout />} />
            </Route>
        </Routes>
    )
}

export default AppRouts
