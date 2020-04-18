import React from 'react';
import './LoginPage.css';


class LoginPage extends React.Component
{
    render(){
    return (
        <div className="card">
            <h1>Login Page</h1>
            <h3>Tugas Pertemuan 3</h3>
            <div className='formLogin'>
                <form action="">

                <label>Username</label>
                <input type="text" name="username" class="form_login" placeholder="Username ..."></input> 

                <label>Password</label>
                <input type="text" name="password" class="form_login" placeholder="Password ..."></input>
                
                <input type="checkbox" checked="checked"></input>
                <span class="checkmark"></span><label> Remember me</label><p></p>
                <input type="submit" class="tombol_login" value="LOGIN"></input><p></p>
                <center><input type="submit" class="tombol_cancel" value="Cancel"></input></center>
                </form>
            </div>
        </div>
    );
    }
}

export default LoginPage;