import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ name }) => {
    const [allProducts, setProducts] = useState([]);
    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState("");
    const [editingPrice, setEditingPrice] = useState("");


    // Callbacks do CRUD

    // Create 
    const addProduct = () => {
        if (product.trim() === "") return;
        setProducts([...allProducts, {id: Date.now(), text: product, price: price}]);
        setProduct("");
        setPrice("");
    }

    // Read => 
    // Será gerada uma listagem
    
    // Read 
    const startEditing = (id, text, price) => {
        setEditingId(id);
        setEditingText(text);
        setEditingPrice(price);
    }

    // Update
    const saveEdit = () => {
        setProducts(
            allProducts.map((product) => 
                product.id === editingId ? { ...product, text: editingText, price: editingPrice}: product 
            )
        );
        setEditingId(null);
        setEditingText("");
        setEditingPrice("");
        
    }

    // Delete
    const deleteProduct = (id) => {
        setProducts(allProducts.filter((product) => product.id !== id));
    }

    // Cancel editing
    const cancelEditing = () => {
        setEditingId(null);
        setEditingText("");
        setEditingPrice("");
    }

    return (
        <div style={{ textAlign: "center", marginTop: "50px"}}>
            <h2>Carrinho de compras: {name}</h2>
            <input
                type="text"
                value={product}
                onChange={(event) => setProduct(event.target.value)}
                placeholder="Escreva seu produto..."
            />

            <input
                type="text"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                placeholder="Escreva o preço..."
            />
            <button onClick={addProduct}>Incluir produto</button>

            <ul style={{ listStyle: "none", padding: 0}}>
                {allProducts.map((product) => (
                    <li key={product.id} style={{ margin: "10px 0"}}>
                        {editingId === product.id ? (
                            <>
                                <input 
                                    type="text"
                                    value={editingText}
                                    onChange={(event) => setEditingText(event.target.value)}
                                />
                                <input 
                                    type="text"
                                    value={editingPrice}
                                    onChange={(event) => setEditingPrice(event.target.value)}
                                />
                                <button onClick={saveEdit}>Salvar</button>
                                <a href="#" onClick={cancelEditing}>Cancelar</a>
                            </>
                        ) : (
                            <>
                                <ProductCard product={product}/> 
                                <button onClick={() => startEditing(product.id, product.text, product.price)}>Editar</button>
                                <button onClick={() => deleteProduct(product.id)}>Excluir</button>
                            </>
                        ) }
                    </li>
                ))

                }
            </ul>
        </div>
    );

}
export default ProductList;