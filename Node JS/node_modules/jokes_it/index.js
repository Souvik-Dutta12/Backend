#! /usr/bin/env node
const axios = require("axios");

const url = "https://v2.jokeapi.dev/joke/Programming";
let res = axios
  .get(url, { headers: { Accept: "application/json" } })
  .then((res) => {
    if (res.data.joke) {
      console.log(res.data.joke);
    } else {
      console.log(res.data.setup + "\n" + res.data.delivery);
    }
  });

async function getJokes() {
  let joke = "";
}
