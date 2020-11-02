import React from 'react'
import Img from 'gatsby-image'

import styles from './package.module.scss'

export default ({ data }) => (
  <div className={styles.hero}>
    <div className={styles.stockHeader}>
      <div className={styles.celHeader}>SELECT PACKAGE</div>
    </div>
    <div className={styles.celBlock}>We strongly recommend subscribing as maximum results may take time</div>

    <div className={styles.cardRow}>
      <div className={styles.card}>
        <img src={"../../images/product.png"} alt="hero image"/>
        <h5 className={styles.cardLeft}>2x Hair Stimulation Pack</h5>
        <p className={styles.cardLeft}>2 Shampoos + 2 Free Conditioners</p>
        <img className={styles.cardTick} src={"../../images/tick.svg"} alt="hero image"/>
        <p className={styles.cardLeft}>Free US Shipping</p>
        <div class={styles.splitGroup}>
          <button className={styles.subscribeSplitBtnLeft } data-bind="">{data.heroSubscribeButtonText}</button>
          <button className={styles.subscribeSplitBtnRight } data-bind=""><span className={styles.splitDrop}>${data.subscribePrice}.52<br></br>({data.subscribeDiscount}% Off) </span></button>
        </div>
        <div class={styles.splitGroup}>
          <button className={styles.purchaseSplitBtnLeft } data-bind="">{data.heroPurchaseButtonText}</button>
          <button className={styles.purchaseSplitBtnRight } data-bind=""><span className={styles.splitDrop}>${data.purchasePrice}<br></br>({data.purchaseDiscount}% Off) </span></button>
        </div>
      </div>
      <div className={styles.selectedCard}>
        <img src={"../../images/selectedProduct.png"} alt="hero image"/>
        <h5 className={styles.selectedCardLeft}>2x Hair Stimulation Pack</h5>
        <p className={styles.selectedCardLeft}>2 Shampoos + 2 Free Conditioners</p>
        <img className={styles.cardTick} src={"../../images/tick.svg"} alt="hero image"/>
        <p className={styles.selectedCardLeft}>Free US Shipping</p>
        <div class={styles.splitGroup}>
          <button className={styles.subscribeSplitBtnLeft } data-bind="">{data.heroSubscribeButtonText}</button>
          <button className={styles.subscribeSplitBtnRight } data-bind=""><span className={styles.splitDrop}>${data.subscribePrice}.52<br></br>({data.subscribeDiscount}% Off) </span></button>
        </div>
        <div class={styles.splitGroup}>
          <button className={styles.purchaseSplitBtnLeft } data-bind="">{data.heroPurchaseButtonText}</button>
          <button className={styles.purchaseSplitBtnRight } data-bind=""><span className={styles.splitDrop}>${data.purchasePrice}<br></br>({data.purchaseDiscount}% Off) </span></button>
        </div>
      </div>
      <div className={styles.card}>
        <img src={"../../images/product.png"} alt="hero image"/>
        <h5 className={styles.cardLeft}>2x Hair Stimulation Pack</h5>
        <p className={styles.cardLeft}>2 Shampoos + 2 Free Conditioners</p>
        <img className={styles.cardTick} src={"../../images/tick.svg"} alt="hero image"/>
        <p className={styles.cardLeft}>Free US Shipping</p>
        <div class={styles.splitGroup}>
          <button className={styles.subscribeSplitBtnLeft } data-bind="">{data.heroSubscribeButtonText}</button>
          <button className={styles.subscribeSplitBtnRight } data-bind=""><span className={styles.splitDrop}>${data.subscribePrice}.52<br></br>({data.subscribeDiscount}% Off) </span></button>
        </div>
        <div class={styles.splitGroup}>
          <button className={styles.purchaseSplitBtnLeft } data-bind="">{data.heroPurchaseButtonText}</button>
          <button className={styles.purchaseSplitBtnRight } data-bind=""><span className={styles.splitDrop}>${data.purchasePrice}<br></br>({data.purchaseDiscount}% Off) </span></button>
        </div>
      </div>
    </div>
    <div className={styles.payImage}>
      <img src={"../../images/pay.png"} alt="hero image"/>
    </div>

    {/* <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div> */}
  </div>
)
