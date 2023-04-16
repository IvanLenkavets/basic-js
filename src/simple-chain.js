const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  
  addLink(value) {
    if (value === undefined) {
      this.chain.push("( )");
    } else {
      this.chain.push("( " + value + " )");
    }
    return this;
  },
  
  removeLink(position) {
    if (
        position < 1 ||
        typeof position !== "number" ||
        position > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  
  finishChain() {
    const resultChain = this.chain.join("~~");
    this.chain = [];
    return resultChain;
  }
};

module.exports = {
  chainMaker
};
