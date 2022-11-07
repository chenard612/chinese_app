import styles from '../../styles/components/Playground/AnswerForm.module.scss'
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cookie from 'js-cookie';


const AnswerForm = (props) => {
    const [answer, setAnswer] = useState("");
    const { register, handleSubmit } = useForm();
    const word = props.word;


    const onSubmit = handleSubmit((data) => {
        console.log(answer, word);
        const newData = JSON.stringify(answer);
        axios({ 
            headers :{
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': cookies.load("csrftoken"),
            },
            method: 'post', 
            url: 'http://127.0.0.1:8000/api/check_answer/', 
            data: newData
        })
        .then((response) => {
        })
        .catch((response) => {
            console.error(response);
        });
      });


    return <div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <input type="hidden" name="csrfmiddlewaretoken"  />
                <input 
                    className={styles.inputField} 
                    type="text" 
                    onChange={(e) => setAnswer(e.target.value)}
                    value={answer}
                    placeholder="Enter Translation..">
                </input>
                <input className={styles.button} type="submit" />
            </form>
           </div>;
};
    
export default AnswerForm;