import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Card } from "react-bootstrap";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Products = () => {
  const [data, setData] = useState([]);
  const getProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setData(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {data.map((item) => {
        return (
          <div >
            <Card
              style={{
                width: "18rem",
                height: "35rem",
                display: "inline-block",
                margin: "10px",
               }}
            >
              <Card.Header>
                <Card.Title>{item.title.slice(0, 15)}</Card.Title>
              </Card.Header>

              <Card.Body>
                <Card.Img
                  variant="top"
                  src={item.image}
                  width="17rem"
                  height="300rem"
                />
                <Card.Text>{item.description.slice(0, 75)}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <i>
                  <CurrencyRupeeIcon />{item.price}
                </i>
              </Card.Footer>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
