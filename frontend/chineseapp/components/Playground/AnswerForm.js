import styles from '../../styles/components/Playground/AnswerForm.module.scss'

const AnswerForm = () => {
    return <div>
            <form className={styles.form}>
                <input className={styles.inputField} type="text" id="fname" name="firstname" placeholder="Enter Translation.."></input>
            </form>
            <button className={styles.button}>Submit</button>
           </div>;
};
    
export default AnswerForm;