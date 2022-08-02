/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Aug 02 2022 11:35:26 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { generateBalance, generateName } from "./utils.js";

export default class Bidder {
  #balance;

  constructor() {
    this.name = generateName();
    this.#balance = generateBalance(99, 99999);
  }

  // getter: can bid
  canBid(amount) {
    if (this.#balance >= amount) return true;
    return false;
  }

  // // getter: balance
  // getBalance() {
  //   return this.#balance;
  // }

  #updateBalance(amount) {
    this.#balance -= amount;
  }
}
