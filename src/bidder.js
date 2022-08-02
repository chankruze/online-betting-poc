/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Aug 02 2022 11:35:26 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { generateName } from "./utils.js";
import Wallet from "./wallet.js";

export default class Bidder {
  #wallet;

  constructor() {
    this.name = generateName();
    this.#wallet = new Wallet();
  }

  // getter: can bid
  canBid(amount) {
    if (this.#wallet.getBalance() >= amount) return true;
    return false;
  }

  debitFromWallet(amount) {
    this.#wallet.debit(amount);
  }

  log() {
    console.table({
      name: this.name,
      walletBalance: this.#wallet.getBalance(),
      walletCurrency: this.#wallet.getCurrency(),
    });
  }
}
