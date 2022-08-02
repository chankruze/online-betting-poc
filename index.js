/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Aug 01 2022 15:29:24 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Auction from "./auction.js";
import Bidder from "./bidder.js";

const auction1 = new Auction(820, Date.now() + 10000);
auction1.setDebug(true);

// initiate bidders
const bidder1 = new Bidder();
const bidder2 = new Bidder();
const bidder3 = new Bidder();
bidder1.log();
bidder2.log();
bidder3.log();

//
auction1.placeBid(100, bidder1);
auction1.placeBid(5666, bidder2);
auction1.placeBid(500, bidder3);
auction1.placeBid(7898, bidder2);
auction1.placeBid(8956, bidder1);

auction1.log();
bidder1.log();
bidder2.log();
bidder3.log();
