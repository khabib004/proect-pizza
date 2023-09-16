import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { ProductContext } from "../../context/ProductContext";
import { products } from "../../data/products";

import "./ProducModal.css";

function ProductCard({ name, description, price, id, image }) {
  const { setCart, cart } = useContext(ProductContext);

  const addToCart = (id) => {
    let product = products.find((el) => el.id === id);
    let checkCart = cart.find((el) => el.id === id);
    let newCart;
    if (checkCart) {
      newCart = cart.map((el) => {
        if (el.id === id) {
          el.quantity++;
        }
        return el;
      });
      setCart(newCart);
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
      setCart(newCart);
    }

    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  let check = cart.find((el) => el.id === id);

  return (
    <div className="container">
      <Card>
        <LazyLoadImage
          className="card-img-top"
          effect="blur"
          style={{ height: "200px", objectFit: "cover" }}
          src={image}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="button-card">
            <Button
              variant={check ? "success" : "primary"}
              onClick={() => addToCart(id)}
            >
              Выбрать
            </Button>
            <Card.Text>от {price} ₽</Card.Text>
          </div>
        </Card.Body>
      </Card>

    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
  image: PropTypes.string,
};

export default ProductCard;
