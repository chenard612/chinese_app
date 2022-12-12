import styles from '../../styles/components/NavBar/NavBar.module.scss'
import OptionMenu from './OptionMenu'
import Progress from './Progress'
import Play from './Play'

const NavBar = () => {
    return <div className={styles.container}>
                <OptionMenu />
                <div className={styles.compartment}>
                <Play/>
                </div>
                <Progress/>
            </div>;
};

export default NavBar;