import React from 'react'
import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image'

export default function PizzaCards() {
  return (
    <div className={styles.container}>
        <Image src="/img/pizza.png" alt="" width="500" height="500"/>
        <h1 className={styles.title}>Mussarela</h1>
        <span className={styles.price}>$19,90</span>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    )
}
