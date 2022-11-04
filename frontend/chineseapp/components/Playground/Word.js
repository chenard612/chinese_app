import styles from '../../styles/components/Playground/Word.module.scss'
import { useEffect } from 'react';

const Word = (props) => {
    

    return <div className={styles.MainWord}>{props.word}
    <hr className={styles.lineBreak}></hr>
    </div>;
};
    
export default Word;