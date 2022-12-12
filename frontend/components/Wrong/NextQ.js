
import { useEffect } from 'react';
import styles from '../../styles/components/Wrong/NextQ.module.scss'

const NextQ = (props) => {

    function loadPlayground() {
        window.location.href = '/';
    }

    return <div>
    <div></div>
    
    <div onClick={loadPlayground} className={styles.continue_button}>CONTINUE</div>
    </div>;
};
    
export default NextQ;