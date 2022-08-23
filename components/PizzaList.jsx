import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

export default function PizzaList({ pizzaList }) {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque sed nunc non libero luctus volutpat. Nullam gravida bibendum enim, vel 
        interdum eros egestas non. 
        </p>
        <div className={styles.wrapper}>
            {pizzaList.map((pizza) => (
              <PizzaCard key={pizza._id} pizza={pizza}/>

            ))}


          
        </div>
    </div>
  )
}
