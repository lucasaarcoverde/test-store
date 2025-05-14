import React from 'react';
import styles from './customProductShelf.module.scss';

export function CustomProductShelf() {
  const products = [
    {
      id: 1,
      title: 'Sérum 10 em 1 - 40ml - Wepink',
      description: 'o rosinha mais amado do Brasil',
      originalPrice: 'R$ 59,90',
      price: 'R$ 39,90',
      imageUrl: 'https://wepink.vtexassets.com/arquivos/ids/159349-1000-1000?v=638690112824170000&width=1000&height=1000&aspect=true',
      discount: '33% OFF'
    },
    {
      id: 2,
      title: 'Booster Repair Óleo Capilar 30ml - Wepink',
      description: 'fórmula exclusiva para cuidar dos cabelos com potência',
      originalPrice: 'R$ 59,90',
      price: 'R$ 39,90',
      imageUrl: 'https://wepink.vtexassets.com/arquivos/ids/160517-1000-1000?v=638812136935530000&width=1000&height=1000&aspect=true',
      discount: '33% OFF'
    },
    {
      id: 3,
      title: 'Hydracare Essential Hidratante Facial 60ml - Wepink',
      description: 'o toque hidratante que faltava na sua skincare!',
      originalPrice: 'R$ 59,90',
      price: 'R$ 39,90',
      imageUrl: 'https://wepink.vtexassets.com/arquivos/ids/160074-1000-1000?v=638762572923800000&width=1000&height=1000&aspect=true',
      discount: '33% OFF'
    },
    {
      id: 4,
      title: 'We Femme Sabonete Íntimo 250ml - Wepink',
      description: 'uma limpeza diária cheia de proteção e frescor!',
      originalPrice: 'R$ 39,90',
      price: 'R$ 26,90',
      imageUrl: 'https://wepink.vtexassets.com/arquivos/ids/159897-1000-1000?v=638755052548500000&width=1000&height=1000&aspect=true',
      discount: '33% OFF'
    }
  ];

  return (
    <section className={styles.customProductShelf}>
      <h2 className={styles.shelfTitle}>queridinhos da wepink</h2>
      <div className={styles.productsContainer}>
        <button className={styles.arrowButton} aria-label="Previous product" data-direction="prev">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className={styles.products} data-fs-product-shelf-items>
          {products.map((product) => (
            <div key={product.id} className={styles.productItem} data-fs-product-shelf-item>
              <div className={styles.productCard} data-fs-product-card>
                <div className={styles.imageContainer} data-fs-product-card-image>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className={styles.productImage}
                  />
                </div>
                <div className={styles.productInfo}>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <p className={styles.productDescription}>{product.description}</p>
                  <div className={styles.priceContainer}>
                    <span className={styles.originalPrice}>{product.originalPrice}</span>
                    <div className={styles.currentPriceContainer}>
                      <span className={styles.currentPrice}>{product.price}</span>
                      <span className={styles.discount}>{product.discount}</span>
                    </div>
                  </div>
                  <button className={styles.addToCartButton}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className={styles.arrowButton} aria-label="Next product" data-direction="next">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
