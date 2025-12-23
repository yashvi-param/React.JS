import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

const Order = ({ onHide, onShow }) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const handleOrderData = async () => {
      try {
        const res = await axios("http://localhost:5000/orders");

        const data = res.data;

        setOrder(data);

        // console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    handleOrderData();
  }, []);

  // const handleOrderStatus = async (id, status) => {
  //   try {
  //     const res = await fetch(`http://localhost:5000/orders/${id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ status }),
  //     });

  //     if (!res.ok) {
  //       throw new Error("failed to update order status");
  //     }

  //     alert("order status updated successfully");

  //     setOrders((prevOrder) =>
  //       prevOrder.map((prod) =>
  //         prod.id === id ? { ...prod, status: status } : prod
  //       )
  //     );
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const handleOrderStatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/orders/${id}`, { status,});

      setOrder((prevOrder) =>
        prevOrder.map((prod) => (prod.id === id ? { ...prod, status } : prod))
      );

      alert("order status updated successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/orders/${id}`);

      setOrder((prevOrder) => prevOrder.filter((ord) => ord.id !== id));

      alert("Order deleted successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={onShow}
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your Orders
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {order.length === 0 ? (
            <p>Your Order Cart is Empty</p>
          ) : (
            <Table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Order</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Total Amount</th>
                  <th className="text-center" colSpan={2}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.map((ord) => (
                  <tr key={ord.id}>
                    <td>{ord.id}</td>
                    <td>
                      {ord.cart.map((item, index) => (
                        <ul key={index}>
                          <li>{item.name}</li>
                          <small>
                            {item.quantity} ✖️ ₹{item.price}
                          </small>
                        </ul>
                      ))}
                    </td>
                    <td>{ord.status}</td>
                    <td>{new Date(ord.createdAt).toLocaleString()}</td>
                    <td>{ord.totalAmount}</td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => handleOrderStatus(ord.id, "completed")}
                      >
                        Complete
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(ord.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Order;