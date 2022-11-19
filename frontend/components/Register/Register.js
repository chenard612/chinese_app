import styles from '../../styles/components/Register/Register.module.scss';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cookies from 'js-cookie';

const Register = (props) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log('Submit!');
        // console.log(answer, word);
        // const newData = JSON.stringify(answer);
        axios({ 
            headers :{
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'post', 
            url: 'http://127.0.0.1:8000/rest-auth/registration/', 
            // data: newData
        })
        .then((response) => {
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
                        <input className={styles.inputField} type='input'></input>
                        <label>Email:</label>
                        <input className={styles.inputField} type='input'></input>
                        <label>Password:</label>
                        <input className={styles.inputField} type='password'></input>
                        <label>Please confirm Password:</label>
                        <input className={styles.inputField} type='password'></input>
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