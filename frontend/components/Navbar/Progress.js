import styles from '../../styles/components/NavBar/Progress.module.scss'
import { Link, useNavigate } from "react-router-dom";

const Progress = () => {
    
    return  <div className={styles.compartment}>
                <i className="bi bi-graph-up-arrow"></i>
            </div>;
};

export default Progress;