#!/usr/bin/node

export default function setFromArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Input must be an array');
  }
  return new Set(array);
}
