import Image from 'next/image'

import styles from '../styles/Card.module.scss'

export default function Card(props) {
    const redWords = ['book'];

    const handleRedWords = (data) => {
        const dataArray = data.split(" ");
        dataArray.map((word, index) => {
            let wordArray = word.split('');
            let hadPunctuation = false;
            if (wordArray.indexOf('.') !== -1) { 
                hadPunctuation = '.';
                wordArray.pop();
                word = wordArray.join('');
            }
            if (redWords.indexOf(word.toLowerCase()) !== -1) {
                    dataArray.splice(index, 1, <span style={{color:'red'}}>{hadPunctuation ? word + hadPunctuation: word}</span>) 
            } 
        })
        return dataArray.join(" ");
    }
    const renderChoices = () => {
        if (props.choices) {
            return (
                <div>
                <h3 className={styles.choicesTitle}>{handleRedWords(props.prompt)}</h3>
                <ul className={styles.choicesList}>
                {props.choices.map((choice, index) => (<li key={index} onClick={() => props.handleChoice(choice.number)} className={styles.choice}>{handleRedWords(choice.text)}</li>))}
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
                <Image height={379} width={300} src={props.img} alt={props.alt}/>
            </div>
            <p className={styles.description}>
                {handleRedWords(props.description)}
            </p>
            {renderChoices()}
        </div>
    )
}