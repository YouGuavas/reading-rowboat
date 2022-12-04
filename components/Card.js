import { SERVER_PROPS_ID } from 'next/dist/shared/lib/constants'
import Image from 'next/image'

import styles from '../styles/Card.module.scss'

export default function Card(props) {
    const renderChoices = () => {
        if (props.choices) {
            return (
                <ul className={styles.choicesList}>
                <h3>{props.prompt}</h3>
                {props.choices.map((choice) => (<li onClick={() => props.handleChoice(choice.number)} className={styles.choice}>{choice.text}</li>))}
                </ul>
            )
        }
    }
    return (
        <div className={styles.card}>

            <Image height='379px' width='300px' src={props.img}/>
            <p className={styles.description}>
                {props.description}
            </p>
            {renderChoices()}
        </div>
    )
}