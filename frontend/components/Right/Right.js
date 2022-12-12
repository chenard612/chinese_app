
import { useEffect, useState } from 'react';
import styles from '../../styles/components/Right/Right.module.scss'
import axios from 'axios';

const Right = (props) => {
    const [english, setEnglish] = useState('');
    const [mandarin, setMandarin] = useState('');

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/right_answer',
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
    <div className={styles.check}><div className="bi bi-check-circle"></div></div>
    <div className={styles.text1}>Right Answer!</div>
    <div className={styles.word}>{english}</div>
    <hr className={styles.lineBreak}></hr>
    <div className={styles.word}>{mandarin}</div>
    <div className={styles.text2}>Progress:</div>
    <div className={styles.text1}>Upcoming</div>
    </div>
};
    
export default Right;