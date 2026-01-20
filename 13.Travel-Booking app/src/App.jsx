import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import Layout from "./routes/Layout";
import Home from "./components/ui/Home";
import TripsData from "./components/pages/Trips";
import TripDetail from "./components/pages/TripDetail";
import Auth from "./components/Auth/Auth";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
        {
          path: "Auth",
          element: <Auth />,
        },
      ],
    },
  ]);

   return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <RouterProvider router={router}>

            </RouterProvider>
          </Col>
        </Row>
      </Container>

    </>
  )
};

export default App;