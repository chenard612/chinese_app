
import { useEffect } from 'react';
import styles from '../../styles/components/Auth/Login.module.scss'

const Login = (props) => {

    return <div className={styles.main}>
                <div className={styles.title}>
                    LOGIN
                </div>
                <div className={styles.container}>
                    <form className={styles.form}>
                        <input type="hidden" name="csrfmiddlewaretoken"  />
                        <input className={styles.inputField} type='input'></input>
                        <input className={styles.inputField} type='input'></input>
                        <input className={styles.button} type="submit" />
                    </form>
                </div>    
            </div>;
};
    
export default Login;