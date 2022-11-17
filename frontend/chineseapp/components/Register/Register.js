
import { useEffect } from 'react';
import styles from '../../styles/components/Register/Register.module.scss'

const Register = (props) => {

    return <div className={styles.main}>
                <div className={styles.title}>
                    VOC
                </div>
                <div className={styles.container}>
                    <div className={styles.form_instructions}>Please register your account here:</div>
                    <form className={styles.form}>
                        <input type="hidden" name="csrfmiddlewaretoken"  />
                        <label>Username:</label>
                        <input className={styles.inputField} type='input'></input>
                        <label>Email:</label>
                        <input className={styles.inputField} type='input'></input>
                        <label>Password:</label>
                        <input className={styles.inputField} type='password'></input>
                        <label>Please confirm Password:</label>
                        <input className={styles.inputField} type='password'></input>
                        <input className={styles.button} type="submit" />
                    </form>
                    <div className={styles.form_instructions}>Already have an account? Login here</div>
                </div>
            </div>;
};
    
export default Register;