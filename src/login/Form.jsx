import React from 'react'
import SignUpForm from "./SignUpForm"
import "./Form.css";
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import LoginFrom from './LoginForm';
import ForgotPassWord from './ForgotPassWord';

function Form() {
    return (
        <div>        
                <Routes>
                    <Route path='/login' element ={<LoginFrom/>}></Route>
                    <Route path='/signup' element = {<SignUpForm/>}></Route>
                    <Route path='/forgotpassword' element={<ForgotPassWord/>}></Route>
                </Routes>
           
         
        </div>
    )
}

export default Form;