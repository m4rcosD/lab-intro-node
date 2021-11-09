class SortedList {
  constructor() {
    this.items = []
    this.length = 0;
  }

  add(item){
this.items.push(item)
this.items.sort((items, item) => items - item)
this.length++;
  }
  

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
