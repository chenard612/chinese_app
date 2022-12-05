
import { useEffect } from 'react';
import styles from '../../styles/components/Wrong/Wrong.module.scss'

const Wrong = (props) => {

    return <div className={styles.container}>
    <div className={styles.x}>X</div>
    
    <div>Wrong Answer!</div>

    </div>;
};
    
export default Wrong;