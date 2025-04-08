import React from "react";

const ProductCard = ( {product} ) => {
    console.log(product)
    return (
        <>
            <h2>ID #{product.id} {product.text} {product.price}</h2>
            <button>Adicionar ao carrinho</button>
       </>
    );
    
};

export default ProductCard;