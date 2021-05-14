import React from "react";
import { FirstImage } from "./Images/FirstImage";
import { SecondImage } from "./Images/SecondImage";
import { Table } from "react-bootstrap";

export const Main = () => {
  let width = window.innerWidth;
  return (
    <div className="bg-dark">
      <FirstImage width={width} />
      <Table responsive hover variant="dark" style={{ fontSize: "100%" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Platform</th>
            <th>Last Traded Price</th>
            <th>Buy / Sell Price</th>
            <th>Difference</th>
            <th>Savings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>WazirX</td>
            <td>₹ 40,49,595</td>
            <td>₹ 40,49,439 / ₹ 40,49,595</td>
            <td>6.04 %</td>
            <td>▲ ₹ 2,30,623</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Bitbns</td>
            <td>₹ 40,49,595</td>
            <td>₹ 40,49,439 / ₹ 40,49,595</td>
            <td>6.04 %</td>
            <td>▲ ₹ 2,30,623</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Giotus</td>
            <td>₹ 40,49,595</td>
            <td>₹ 40,49,439 / ₹ 40,49,595</td>
            <td>6.04 %</td>
            <td>▲ ₹ 2,30,623</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Colodax</td>
            <td>₹ 40,49,595</td>
            <td>₹ 25,75,167 / ₹ 26,08,984</td>
            <td>6.04 %</td>
            <td>▲ ₹ 2,30,623</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Zebpay</td>
            <td>₹ 40,49,595</td>
            <td>₹ 40,49,439 / ₹ 40,49,595</td>
            <td>6.04 %</td>
            <td>▲ ₹ 2,30,623</td>
          </tr>
          <tr>
            <td>6</td>
            <td>CoinDCX</td>
            <td>₹ 40,49,595</td>
            <td>₹ 40,49,439 / ₹ 40,49,595</td>
            <td>6.04 %</td>
            <td>▲ ₹ 2,30,623</td>
          </tr>
        </tbody>
      </Table>
      <SecondImage width={width} />
    </div>
  );
};
