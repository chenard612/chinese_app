
import { useEffect } from 'react';
import styles from '../../styles/components/Auth/Login.module.scss'

const Login = (props) => {

    return <div className={styles.main}>
                <div className={styles.title}>
                    VOC
                </div>
                <div className={styles.container}>
                    <div className={styles.form_instructions}>Please enter your credential below:</div>
                    <form className={styles.form}>
                        <input type="hidden" name="csrfmiddlewaretoken"  />
                        <label>Email:</label>
                        <input className={styles.inputField} type='input'></input>
                        <label>Password:</label>
                        <input className={styles.inputField} type='password'></input>
                        <input className={styles.button} type="submit" />
                    </form>
                <div className={styles.form_instructions}>
                    Not a member?
                    <span> </span> 
                    <a className={styles.hyperlink} href="/register">Sign Up Here</a>
                </div>
                </div>
            </div>;
};
    
export default Login;