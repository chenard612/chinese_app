import styles from '../../styles/components/Playground/Skip.module.scss'
import React, { useState, useEffect } from 'react';

const Skip = (props) => {

    function refreshPage() {
        console.log('clciked!');
        window.location.reload(false);
      }

    return <div>
            <button onClick={refreshPage} className={styles.button}>Skip</button>
            </div>;
};

export default Skip;