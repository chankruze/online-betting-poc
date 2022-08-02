/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Aug 01 2022 15:41:58 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import moment from "moment";
import Bid from "./bid.js";

export default class Auction {
  // auction (id)
  static #id = 0;
  static STATE_ONGOING = "ONGOING";
  static STATE_EXPIRED = "EXPIRED";
  // private variables
  #auctionId;
  #openingValue;
  #topBid;
  #expiryDate;
  #auctionSate;

  /**
   * constructor
   */
  constructor(openingValue, expiryDate) {
    this.#auctionId = ++Auction.#id;
    this.#openingValue = openingValue;
    this.#topBid = null;
    this.#expiryDate = new Date(expiryDate).toISOString();
    this.#auctionSate = Auction.STATE_ONGOING;
  }

  /**
   * private methods
   */

  #isAuctionOnging() {
    if (moment().isAfter(moment(this.#expiryDate))) {
      this.#auctionSate = Auction.STATE_EXPIRED;
      return false;
    }

    return true;
  }

  /**
   * public methods
   */
  // 1. bid
  placeBid(amount, bidder) {
    // check if the auction is open
    if (!this.#isAuctionOnging()) return;
    // if bidder has enough money
    if (!bidder.canBid(amount)) return;
    // initiate bid object
    const bid = new Bid(amount, bidder);

    // first bid
    if (!this.#topBid) {
      if (bid.amount > this.#openingValue) {
        bid.state = Bid.SUCCESSFUL;
        this.#topBid = bid;
        // TODO: deduct from bidder's wallet when auction ends
        bid.bidder.debitFromWallet(amount);
        this.devDebug(bid);
        return bid;
      }

      bid.state = Bid.FAILED;
      bid.error = "bid amount must be higher than the opening price.";
      this.devDebug(bid);
      return bid;
    }

    // if already bidded
    if (this.#topBid) {
      if (bid.amount > this.#topBid.amount) {
        bid.state = Bid.SUCCESSFUL;
        this.#topBid = bid;
        // TODO: deduct from bidder's wallet when auction ends
        bid.bidder.debitFromWallet(amount);
        this.devDebug(bid);
        return bid;
      }

      bid.state = Bid.FAILED;
      bid.error = "bid amount must be higher than the top bid.";
      this.devDebug(bid);
      return bid;
    }
  }

  // 2. highest bid
  getTopBid() {
    return this.#topBid;
  }

  // 3. time remaining
  timeLeft() {
    return { timeLeft: new Date(this.#expiryDate) - new Date() };
  }

  // 4. print auction data
  log() {
    console.log(`--- AUCTION #${this.#auctionId} ---`);
    console.table({
      id: this.#auctionId,
      opening: this.#openingValue,
      expiry: this.#expiryDate,
      topBidId: this.#topBid ? this.#topBid.id : null,
    });
    // check if top bid exists
    if (this.#topBid) {
      console.log("--- TOP BID ---");
      console.table(this.#topBid);
    }
  }

  // 5. debug mode
  setDebug(val) {
    this.debug = val;
  }

  // 6. log
  devDebug(obj) {
    if (this.debug) console.log(obj);
  }
}
