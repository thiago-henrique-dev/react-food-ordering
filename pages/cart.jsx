import styles from "../styles/Cart.module.css";
import Image from "next/image";
import React from "react";
export default function Cart(){
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>]
          <tr className={styles.trTitle}>
            <th>Order ID</th>
            <th>Customers</th>
            <th>Address</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <span className={styles.id}>212</span>
            </td>
            <td>
              <span className={styles.name}>
                Thiago Henrique
              </span>
            </td>
            <td>
              <span className={styles.address}>Elton st. 212-33 LA</span>
            </td>

            <td>
              <span className={styles.total}>$79.80</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>CORALZO</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>$19.90</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$39.80</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

