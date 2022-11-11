import Word from './Word'
import AnswerForm from './AnswerForm'
import Skip from './Skip'
import Timer from './Timer'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Playground = () => {
    const [english, setEnglish] = useState('')
    const [mandarin, setMandarin] = useState('')

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/',
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((response) => {
            const data = response.data;
            setMandarin(data.mandarin);
          })
          .catch((response) => {
            console.error(response);
          });
      }, []);

    return <div>
    <Timer />
    <Word word={mandarin} />
    <AnswerForm word={mandarin}/>
    <Skip />
    </div>;
};

export default Playground;