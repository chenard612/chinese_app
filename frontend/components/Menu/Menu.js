
import { useEffect } from 'react';
import Choices from './Choices'
import styles from '../../styles/components/Menu/Choices.module.scss'

const Menu = (props) => {

    return <div>
    <div>Keep tabs on your progress here</div>
    <hr></hr>
        <Choices title={'Verbs'}/>
        <Choices title={'Adjectives'}/>
        <Choices title={'Nouns'}/>
        <Choices title={'Adverbs'}/>
        <Choices title={'Expressions'}/>
    <hr></hr>
    </div>;
};
    
export default Menu;