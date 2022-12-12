import styles from '../../styles/components/NavBar/Play.module.scss'
import { Link, useNavigate } from "react-router-dom";

const Play = () => {
    
    function PlayPage() {
        window.location.href = '/';
    }

    return  <div className={styles.compartment}>
                <i onClick={PlayPage} className="bi bi-trophy-fill"></i>
            </div>;
};

export default Play;