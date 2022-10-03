import React from "react";
import { useState } from "react";
import Barcode from "react-barcode";

const BarcodeGenerator = () => {
  const [text, setText] = useState();
  const [barcode, setBarcode] = useState();
  const generateBarcode = () => {
    setBarcode(text);
  };
  return (
    <div>
      <span className="row text-left badges bg-success text-white mt-5">
        <h2>BarcodeGenerator</h2>
      </span>
      <div className="row mt-2">
        <input
          className="col-sm-8"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="col-sm-2 mx-2 btn btn-primary"
          onClick={generateBarcode}
        >
          Generate Barcode
        </button>
      </div>
      <div className="row mt-3">
        <Barcode value={barcode} />
      </div>
    </div>
  );
};

export default BarcodeGenerator;
