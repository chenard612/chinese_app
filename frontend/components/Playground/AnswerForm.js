import styles from '../../styles/components/Playground/AnswerForm.module.scss'
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cookies from 'js-cookie';
import cookieCutter from 'cookie-cutter'


const AnswerForm = (props) => {
    const [answer, setAnswer] = useState("");
    const [visible, setVisible] = useState();
    const { register, handleSubmit } = useForm();
    const word = props.word;
    const vocab_id = props.vocab_id;

    const onSubmit = handleSubmit((data) => {
        const newData = {"answer":answer, "word":word, 'vocab_id':vocab_id};
        axios({ 
            headers :{
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'post', 
            url: 'http://127.0.0.1:8000/api/check_answer/', 
            data: newData
        })
        .then((response) => {
            console.log(response);
            if (response.data.success == false){
                console.log('we should display the right answer here');       
            }
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