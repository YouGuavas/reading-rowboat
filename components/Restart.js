import styles from '../styles/Restart.module.scss';

export default function Restart(props) {
    return (
        <div className={styles.restart} onClick={() => props.handleChoice(1)}>
            <em>Start Over</em>
        </div>
    )
}