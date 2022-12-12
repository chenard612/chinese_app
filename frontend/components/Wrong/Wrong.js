
import { useEffect, useState } from 'react';
import styles from '../../styles/components/Wrong/Wrong.module.scss'
import axios from 'axios';

const Wrong = (props) => {
    const [english, setEnglish] = useState('');
    const [mandarin, setMandarin] = useState('');

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/wrong_answer',
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((response) => {
            const data = response.data;
            console.log(data);
            setMandarin(data.mandarin);
            setEnglish(data.english);
          })
          .catch((response) => {
            console.error(response);
          });
      }, []);

    return <div className={styles.container}>
    <div className={styles.x}>X</div>
    <div className={styles.text1}>Wrong Answer!</div>
    <div className={styles.text2}>Expected:</div>
    <div className={styles.word}>{english}</div>
    <hr className={styles.lineBreak}></hr>
    <div className={styles.word}>{mandarin}</div>
    <div className={styles.text2}>Progress:</div>
    <div className={styles.text1}>Upcoming</div>
    </div>
};
    
export default Wrong;