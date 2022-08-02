/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Aug 02 2022 11:37:52 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { nanoid } from "nanoid";

const BIDDER_PREFIX = "bidder";

export const generateName = () => {
  return `${BIDDER_PREFIX}_${nanoid(6)}`;
};

export const generateBalance = (min, max) =>
  parseFloat((Math.random() * (max - min) + min + 1).toFixed(2));
