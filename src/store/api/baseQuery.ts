import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { md5 } from "js-md5";

const baseUrl = "https://api.valantis.store:41000/";

export const baseQuery = fetchBaseQuery({
  baseUrl,
  method: 'POST',
  prepareHeaders: (headers) => {
    headers.set("X-Auth", getXAuthHash());
  },
});

function getXAuthHash() {
  const timezoneOffset = new Date().getTimezoneOffset() * 60 * 1000;
  const date = new Date(Date.now() + timezoneOffset);
  const dateString =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2);
  const hash = md5("Valantis_" + dateString);
  return hash;
}
