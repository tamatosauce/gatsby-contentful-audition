import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.scss'

export default ({ data }) => (
  <div className={styles.hero}>
    <div className={styles.stockHeader}>
      <p>Limited Stock Available: ONLY  {data.stockCount} LEFT IN YOUR AREA</p>
    </div>
      <div className={styles.celHeader}>cel</div>
      <div className={styles.heroHeader}>{data.title}</div>
      
      <div className={styles.heroContainer}>
        <div className={styles.heroFloatLeft}>
          <img className={styles.heroImage} src={"../../images/hero.png"} alt="hero image"/>
        </div>
        <div className={styles.heroFloatRight}>
          <ul className={styles.heroList}>
            <li>Utilizes Plant Stem Cell Technology To Give You Thicker Looking, Stronger Hair</li>
            <li>Contains Nutrient-Rich Ingredients Like Advanced Aginine Extract</li>
            <li>Contains Hair Nourashing Proteins That Contribute To Healthy, Thicker Looking Hair</li>
            <li>Includes 90 Day 100% Money Back Guarantee</li>
          </ul>
          <button className={styles.heroButton}>{data.shopButton}</button>
        </div>
      </div>
  </div>
)
