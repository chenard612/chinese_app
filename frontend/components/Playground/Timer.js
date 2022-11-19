import styles from '../../styles/components/Playground/Timer.module.scss'

const Timer = () => {
    return <div>
                <div className={styles.clock}>
                    <div className={styles.top}></div>
                    <div className={styles.right}></div>
                    <div className={styles.bottom}></div>
                    <div className={styles.left}></div>
                    <div className={styles.center}></div>
                    <div className={styles.second}></div>
                </div>
            </div>;
};

export default Timer;