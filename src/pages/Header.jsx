import React from 'react'
import { Form, Route, Routes } from 'react-router-dom'
import SignUpForm from '../login/SignUpForm'
import ForgotPassWord from '../login/ForgotPassWord'
import LoginFrom from '../login/LoginFrom'
import Dashboard from './Dashboard'

function Header() {
    return (
        <div>
            <Routes>
                <Route>
        
                    <Route path='/login' element ={<LoginFrom/>}></Route>
                    <Route path='/signup' element = {<SignUpForm/>}></Route>
                    <Route path='/forgotpassword' element={<ForgotPassWord/>}></Route>
                </Route>
            </Routes>
        </div>
    )
}

export default Header