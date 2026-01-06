import React from 'react';
import Button from '../button';
import styles from './styles.module.css';

export default function GetInvolved() {
    return (
        <section className={styles.getInvolved}>
            <div className="container">
                <h2 className={styles.heading}>Get Involved</h2>
                <div className={styles.buttonGroup}>
                    <Button to="#" color="primary">
                        Chat to Us
                    </Button>
                    <Button to="#" color="secondary">
                        Join Community Calls
                    </Button>
                </div>
            </div>
        </section>
    );
}
