import axios from "axios";
import useHttp from "../Hooks/http";
import Loading from "./Loading";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

function CartModal({ onClose, onShow, cart, clearCart }) {
  const url = "http://localhost:5000/orders";

  const { sendRequest, loading } = useHttp({ url, method: "POST" });

  const totalAmount = cart.reduce((acc, curr) => {
    return (acc += curr.price * curr.quantity);
  }, 0);

  const handlePlaceOrder = async () => {
    const orderData = {
      cart,
      totalAmount,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    try {
      // const res = await fetch("http://localhost:5000/orders", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(orderData),
      // });
      // if (!res.ok) {
      //   throw new Error("failed to place order");
      // }

      // const res = await axios.post("http://localhost:5000/orders", orderData);

      sendRequest(orderData);

      alert("order placed successfully");
      onClose();
      clearCart();
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading) {
    return<Loading/>
  }

  return (
    <>
      <Modal show={onShow} onHide={onClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your Carts Data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length <= 0 ? (
            <p>Your Cart is Empty</p>
          ) : (
            <Table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Sub Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>
                      <Image
                        style={{ maxWidth: "100px" }}
                        src={item.image}
                        alt={item.name}
                      ></Image>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Modal.Body>
        {cart.length > 0 ? (
          <Modal.Footer className="d-flex justify-content-between w-100">
            <div>
              <h4>Total Amount: ₹{totalAmount}</h4>
            </div>
            <Button onClick={() => handlePlaceOrder()}>Place Order</Button>
          </Modal.Footer>
        ) : null}
      </Modal>
    </>
  );
}

export default CartModal;