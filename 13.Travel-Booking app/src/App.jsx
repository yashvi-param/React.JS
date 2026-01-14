import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import LayOut from "./routes/LayOut";
import Home from "./components/ui/Home";
import TripsData from "./components/pages/Trips";
import TripDetail from "./components/pages/TripDetail";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "trips",
          element: <TripsData />,
        },
        {
          path: "trips/:id",
          element: <TripDetail />,
        },
      ],
    },
  ]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <RouterProvider router={router}></RouterProvider>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;