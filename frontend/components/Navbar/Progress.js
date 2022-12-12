import styles from '../../styles/components/NavBar/Progress.module.scss'
import { Link, useNavigate } from "react-router-dom";

const Progress = () => {
    
    function PrograssPage() {
        window.location.href = '/menu/';
    }

    return  <div className={styles.compartment}>
                <i onClick={PrograssPage} className="bi bi-graph-up-arrow"></i>
            </div>;
};

export default Progress;