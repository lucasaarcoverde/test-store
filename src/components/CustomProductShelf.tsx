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
      installments: '3x R$ 13,30',
      imageUrl: 'https://wepink.vtexassets.com/arquivos/ids/159349-1000-1000?v=638690112824170000&width=1000&height=1000&aspect=true',
    },
    {
      id: 2,
      title: 'Booster Repair Óleo Capilar 30ml - Wepink',
      description: 'fórmula exclusiva para cuidar dos cabelos com potência',
      originalPrice: 'R$ 59,90',
      price: 'R$ 39,90',
      installments: '3x R$ 13,30',
      imageUrl: 'https://wepink.vtexassets.com/arquivos/ids/160517-1000-1000?v=638812136935530000&width=1000&height=1000&aspect=true',
    },
    {
      id: 3,
      title: 'Hydracare Essential Hidratante Facial 60ml - Wepink',
      description: 'o toque hidratante que faltava na sua skincare!',
      originalPrice: 'R$ 59,90',
      price: 'R$ 39,90',
      installments: '3x R$ 13,30',
      imageUrl: 'https://wepink.vtexassets.com/arquivos/ids/160074-1000-1000?v=638762572923800000&width=1000&height=1000&aspect=true',
    },
    {
      id: 4,
      title: 'We Femme Sabonete Íntimo 250ml - Wepink',
      description: 'uma limpeza diária cheia de proteção e frescor!',
      originalPrice: 'R$ 59,90',
      price: 'R$ 39,90',
      installments: '3x R$ 13,30',
      imageUrl: 'https://wepink.vtexassets.com/arquivos/ids/159897-1000-1000?v=638755052548500000&width=1000&height=1000&aspect=true',
    }
  ];

  const sectionTitle = 'queridinhos da wepink';

  return (
    <section className={styles.customProductShelf}>
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      <div className={styles.productsContainer}>
        <button className={styles.navButton} aria-label="Previous product" data-direction="prev">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
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
                    <span className={styles.price}>{product.price}</span>
                    <span className={styles.installments}>{product.installments}</span>
                  </div>
                </div>
                <button className={styles.addToCartButton}>+</button>
              </div>
            </div>
          ))}
        </div>
        
        <button className={styles.navButton} aria-label="Next product" data-direction="next">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
