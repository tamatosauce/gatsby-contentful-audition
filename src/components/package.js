import React from 'react'
import Img from 'gatsby-image'

import styles from './package.module.scss'

export default ({ data }) => (
  <div className={styles.hero}>
    <div className={styles.stockHeader}>
      <div className={styles.celHeader}>SELECT PACKAGE</div>
      <p>We strongly recommend subscribing as maximum results may take time</p>
    </div>

    <div className={styles.cardRow}>
      <div className={styles.card}>
        <img src={"../../images/hero.png"} alt="hero image"/>
        <h5>2x Hair Stimulation Pack</h5>
        <p>2 Shampoos + 2 Free Conitioners</p>
        <p>Free US Shipping</p>
        <button className={styles.purchaseButton}>{data.shopButton}</button>
        <button className={styles.subscribeButton}>{data.shopButton}</button>
      </div>
      <div className={styles.card}>
        <img src={"../../images/hero.png"} alt="hero image"/>
        <h5>2x Hair Stimulation Pack</h5>
        <p>2 Shampoos + 2 Free Conitioners</p>
        <p>Free US Shipping</p>
        <button className={styles.purchaseButton}>{data.shopButton}</button>
        <button className={styles.subscribeButton}>{data.shopButton}</button>
      </div>
      <div className={styles.card}>
        <img src={"../../images/hero.png"} alt="hero image"/>
        <h5>2x Hair Stimulation Pack</h5>
        <p>2 Shampoos + 2 Free Conitioners</p>
        <p>Free US Shipping</p>
        <button className={styles.purchaseButton}>{data.shopButton}</button>
        <button className={styles.subscribeButton}>{data.shopButton}</button>
      </div>
    </div>

    {/* <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div> */}
  </div>
)
