import React from 'react';
import styles from './customProductShelf.module.scss';

export function CustomProductShelf() {
  const products = [
    {
      id: 1,
      title: "Ovo de Páscoa Sonic Chocolate ao Leite 80g",
      brand: "Delice",
      price: "R$ 29,90",
      imageUrl: "https://www.americanas.com.br/arquivos/ids/413553_2"
    },
    {
      id: 2,
      title: "Caixa de Bombons Variedades Chocolate",
      brand: "Lacta Favoritos 250g",
      price: "R$ 14,99",
      imageUrl: "https://www.americanas.com.br/arquivos/ids/471902_2"
    },
    {
      id: 3,
      title: "Caixa de Bombom",
      brand: "Garoto 250g",
      price: "R$ 12,99",
      imageUrl: "https://www.americanas.com.br/arquivos/ids/468147_2"
    },
    {
      id: 4,
      title: "Bis Limão 100,8g",
      brand: "Lacta",
      price: "R$ 7,99",
      imageUrl: "https://www.americanas.com.br/arquivos/ids/469976_2"
    },
    {
      id: 5,
      title: "Barra de Chocolate Branco com Recheio",
      brand: "Lacta Ouro Branco 98g",
      price: "R$ 6,99",
      imageUrl: "https://www.americanas.com.br/arquivos/ids/462327_2"
    },
    {
      id: 6,
      title: "Caixa Bombom Especialidades",
      brand: "Nestlé 251g",
      price: "R$ 13,99",
      imageUrl: "https://www.americanas.com.br/arquivos/ids/483433_2"
    },
    {
      id: 7,
      title: "Caixa de Bombons Sonho de Valsa e Ouro Branco",
      brand: "Sortidos 220g",
      price: "R$ 15,99",
      imageUrl: "https://www.americanas.com.br/arquivos/ids/469344_2"
    },
    {
      id: 8,
      title: "Chocolate Kit Kat ao Leite",
      brand: "Nestlé - 41,5g",
      price: "R$ 3,99",
      imageUrl: "https://www.americanas.com.br/arquivos/ids/475725_2"
    },
    {
      id: 9,
      title: "Smartphone Motorola Moto G15 256GB 12GB Ram",
      brand: "Motorola",
      price: "R$ 1.299,00",
      imageUrl: "https://www.americanas.com.br/arquivos/ids/30033417_2"
    },
    {
      id: 10,
      title: "Smartphone Samsung Galaxy A16 128GB + 4GB",
      brand: "Samsung",
      price: "R$ 1.199,00",
      imageUrl: "https://www.americanas.com.br/arquivos/ids/30033322_2"
    }
  ];

  const productTitle = "maratona da diversão";

  return (
    <section className={styles.customProductShelf}>
      <div className={styles.shelfHeader}>
        <h2 className={styles.productTitle}>{productTitle}</h2>
        <a href="#" className={styles.viewAllLink}>ver todos</a>
      </div>
      <div className={styles.productsContainer}>
        <div className={styles.products} data-fs-product-shelf-items>
          {products.map((product) => (
            <div key={product.id} className={styles.productItem} data-fs-product-shelf-item>
              <div className={styles.productItemCard} data-fs-product-card>
                <div className={styles.productCardItemImgWrapper} data-fs-product-card-image>
                  <img
                    className={styles.productCardItemImg}
                    src={product.imageUrl}
                    alt={product.title}
                  />
                </div>
                <div className={styles.productInfo}>
                  <span className={styles.productBrand}>{product.brand}</span>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <span className={styles.productPrice}>{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
