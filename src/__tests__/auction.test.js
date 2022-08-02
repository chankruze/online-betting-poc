/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Aug 02 2022 22:19:56 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Auction from "../auction";

const auction = new Auction(560, Date.now() + 1000);

describe("Auction", () => {
  test("should be an instance of Auction", () => {
    expect(auction).toBeInstanceOf(Auction);
  });
});
