import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.scss'

export default ({ data }) => (
  <div className={styles.hero}>
    <div className={styles.stockHeader}>
      <p>Limited Stock Available: ONLY  {data.stockCount} LEFT IN YOUR AREA</p>
      <h1 className={styles.celHeader}>cel</h1>
    </div>

      <h3 className={styles.heroHeader}>{data.title}</h3>
      
      <div className={styles.heroFloatLeft}>
        <img className={styles.heroImage} src={"../../images/hero.png"} alt="hero image"/>
      </div>
      <div className={styles.heroFloatRight}>
        <ul className={styles.heroList}>
          <li>Utilizes Plant Stem Cell Technology To Give You Thicker Looking, Stronger Hair</li>
          <li>Contains Nutrient-Rich Ingredients Like Advanced Aginine Extract</li>
          <li>ontains Hair Nourashing Proteins That Contribute To Healthy, Thicker Looking Hair</li>
          <li>Includes 90 Day 100% Money Back Guarantee</li>
            {/* {data.heroBodyList.content.map(({ content }) => {
              return (
                console.log(content)
                // <li>{content[0].content}</li>
              )
            })} */}
        </ul>
        <button className={styles.heroButton}>This is a button</button>
      </div>

    {/* <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div> */}
  </div>
)
