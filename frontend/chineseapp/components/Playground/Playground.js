import Word from './Word'
import AnswerForm from './AnswerForm'
import Skip from './Skip'
import React, { useEffect } from 'react';
import axios from 'axios';

const Playground = (props) => {

    useEffect(() => {
        console.log('here!');
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/',
            headers: { 'Content-Type': 'multipart/form-data' },
          })
        .then((response) => {
            console.log(response);
        })
        .catch((response) => {
            console.error(response);
        });
        console.log('end useEffect');
      }, []);

    return <div>
    <Word word={props.word} />
    <AnswerForm />
    <Skip />
    </div>;
};

export default Playground;