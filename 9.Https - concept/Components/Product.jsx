import React, { useEffect, useState } from "react";
import axios from "axios";
import useHttp from "../Hooks/http";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Loading from "./Loading";
import Navbar from "./Navbar";
import CartModal from "./CartModal";

const Product = () => {
  // const [product, setProduct] = useState([]);

  // const [loading, setLoading] = useState(false);

  // const [error, setError] = useState("");

  const [cart, setCart] = useState([]);

  const [showCart, setShowCart] = useState(false);

  const url = "http://localhost:5000/products";

  const { sendRequest, data: product, loading, error } = useHttp({ url });

  useEffect(() => {
    const productData = async () => {
      // try {
      //   setLoading(true);
      //   const res = await axios("http://localhost:5000/products");
      //   const data = res.data;
      //   if (data.length <= 0) {
      //     setError("no data found");
      //   }
      //   setProduct(data);
      // } catch (error) {
      //   console.log(error);
      //   if (error.status === 404) {
      //     setError("invalid url");
      //   } else {
      //     setError(error.message);
      //   }
      // } finally {
      //   setLoading(false);
      // }

      sendRequest();
    };
    productData();
  }, []);

  if (loading) {
    <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleCart = (prod) => {
    const similarData = cart.find((item) => item.id === prod.id);

    console.log(similarData);

    if (similarData) {
      setCart((prevItem) =>
        prevItem.map((item) => {
          return item.id === prod.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        })
      );
    } else {
      setCart((prev) => [...prev, { ...prod, quantity: 1 }]);
    }
  };

  return (
    <>
      <Navbar cart={cart} onShow={() => setShowCart(true)} />

      {showCart && (
        <CartModal
          onShow={showCart}
          onClose={() => setShowCart(false)}
          cart={cart}
          clearCart={() => setCart([])}
        />
      )}

      <Container className="py-4">
        <h1 className="text-center pb-3">Product</h1>
        <Row className="g-4">
          {product.map((prod) => (
            <Col md={3} key={prod.id} className="text-center">
              <Card>
                <Card.Img
                  variant="top"
                  src={prod.image}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{prod.name}</Card.Title>
                  <Card.Text>{prod.description}</Card.Text>
                  <Card.Text>₹ {prod.price}</Card.Text>
                  <Button variant="primary" onClick={() => handleCart(prod)}>
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Product;