import React from "react";
import Image from "next/image";
import { gerogrianToShamsi } from "@/pages/setup/utils/shamsiDateHelper";
import gregorian_en from "react-date-object/locales/gregorian_en";

const CurrencyItem = (props) => {
  const { image, name, last_updated, current_price } = props.data;
  const id = props.index;
  return (
    <tr onClick={props.onClick}>
      <td>{id + 1}</td>
      <td>
        <Image
          src={image}
          alt="Crypto Icon"
          width={20}
          height={20}
          className="me-2"
        />
        {name}
      </td>
      <td>${current_price}</td>
      <td>{gerogrianToShamsi(last_updated, null, gregorian_en)}</td>
    </tr>
  );
};

export default CurrencyItem;
