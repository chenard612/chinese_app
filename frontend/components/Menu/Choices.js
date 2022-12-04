
import { useEffect } from 'react';
import styles from '../../styles/components/Menu/Choices.module.scss'

const Choices = (props) => {

    return <div className={styles.container}>{props.title}
    </div>;
};
    
export default Choices;