import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";

import persian_fa from "react-date-object/locales/persian_fa";
import gregorian_en from "react-date-object/locales/gregorian_en";

export const gerogrianToShamsi = (dateTime,format, language) => {
  
  const date = new DateObject({
    date: dateTime,
    locale: gregorian_en,
    Calendar: gregorian,
    format : format
  })
  .convert(persian, language);

  return date.toString();
};
