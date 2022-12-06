import Image from 'next/image'

import styles from '../styles/Card.module.scss'

export default function Card(props) {
    const renderChoices = () => {
        if (props.choices) {
            return (
                <div>
                <h3 className={styles.choicesTitle}>{props.prompt}</h3>
                <ul className={styles.choicesList}>
                {props.choices.map((choice) => (<li onClick={() => props.handleChoice(choice.number)} className={styles.choice}>{choice.text}</li>))}
                </ul>
                </div>
            )
        } else {
            return (
                <h3 className={styles.choicesTitle}>{props.prompt}</h3>
            )
        }
    }
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image height={379} width={300} src={props.img}/>
            </div>
            <p className={styles.description}>
                {props.description}
            </p>
            {renderChoices()}
        </div>
    )
}