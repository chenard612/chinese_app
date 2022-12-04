import styles from '../../styles/components/Auth/Login.module.scss'
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log('Submit!');
        console.log(email, password);
        axios({
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            url: 'http://127.0.0.1:8000/api/token/',
            data: {
                  'email':email, 
                  'password':password
                  },
            })
        .then((response) => {
            console.log('Done!');
            const data = response.data;
            const access = data.access;
            const refresh = data.refresh;
            axios({
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              url: '/api/login/',
              data: {
                      'access':access,
                      'refresh':refresh
                    },
              })
              .then((response) => {
                const data = response.data;
                window.location.href = '/';
              })
              .catch((response) => {
                console.error(response);
              });
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
                    <div className={styles.form_instructions}>Please enter your credential below:</div>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <input type="hidden" name="csrfmiddlewaretoken"  />
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
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}>
                        </input>
                        <input className={styles.button} type="submit" />
                    </form>
                <div className={styles.form_instructions}>
                    Not a member?
                    <span> </span> 
                    <a className={styles.hyperlink} href="/register">Sign Up Here</a>
                </div>
                </div>
            </div>;
};
    
export default Login;