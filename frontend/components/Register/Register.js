import styles from '../../styles/components/Register/Register.module.scss';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import cookies from 'js-cookie';

const Register = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const { register, handleSubmit } = useForm();


    const onSubmit = handleSubmit((data) => {
        console.log('Submit!');
        const newData = JSON.stringify({ username:username, email:email, password1:password1, password2:password2});
        axios({ 
            headers :{
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'post', 
            url: 'http://127.0.0.1:8000/rest-auth/registration/', 
            data: newData
        })
        .then((response) => {
            console.log('Done!');
            const token = response.data.token;
            console.log(token);
        })
        .catch((response) => {
            console.error(response);
        });
      });

    return <div className={styles.main}>
                <div className={styles.title}>
                    VOC
                </div>
                <div className={styles.container}>
                    <div className={styles.form_instructions}>Please register your account here:</div>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <input type="hidden" name="csrfmiddlewaretoken"  />
                        <label>Username:</label>
                        <input 
                            className={styles.inputField} 
                            type='input'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}>
                        </input>
                        <label>Email:</label>
                        <input 
                            className={styles.inputField} 
                            type='input'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}>
                        </input>
                        <label>Password:</label>
                        <input 
                            className={styles.inputField} 
                            type='password'
                            onChange={(e) => setPassword1(e.target.value)}
                            value={password1}>
                        </input>
                        <label>Please confirm Password:</label>
                        <input 
                            className={styles.inputField}
                            type='password'
                            onChange={(e) => setPassword2(e.target.value)}
                            value={password2}>
                        </input>
                        <input className={styles.button} type="submit" />
                    </form>
                    <div className={styles.form_instructions}>
                    Already have an account?
                        <span> </span> 
                        <a className={styles.hyperlink} href="/auth">Login Here</a>
                    </div>
                </div>
            </div>;
};
    
export default Register;