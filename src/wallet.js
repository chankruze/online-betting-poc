/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Aug 02 2022 20:26:43 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { nanoid } from "nanoid";
import { generateBalance } from "./utils.js";

export default class Wallet {
  #balance;
  #currency;

  constructor() {
    this.id = nanoid(6);
    this.#balance = generateBalance(99, 99999);
    this.#currency = "INR";
  }

  getBalance() {
    return this.#balance;
  }

  getCurrency() {
    return this.#currency;
  }

  debit(amount) {
    // ? should i check balance to prevent negative balance
    this.#balance -= amount;
  }

  credit(amount) {
    this.#balance += amount;
  }

  log() {
    console.table({
      id: this.id,
      balance: this.#balance,
      currency: this.#currency,
    });
  }
}
