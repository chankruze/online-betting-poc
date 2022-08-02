/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Aug 02 2022 07:14:05 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { nanoid } from "nanoid";

export default class Bid {
  static PROCESSING = "BID_PROCESSING";
  static FAILED = "BID_FAILED";
  static SUCCESSFUL = "BID_SUCCESSFUL";

  constructor(amount, bidder) {
    this.id = nanoid(6);
    this.time = new Date().toISOString();
    this.amount = amount;
    this.state = Bid.PROCESSING;
    this.bidder = bidder;
  }
}
