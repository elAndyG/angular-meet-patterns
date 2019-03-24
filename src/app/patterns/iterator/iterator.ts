interface Iterator<T> {
  readonly current: T;
  next(): T;
  hasNext(): boolean;
  rewind(): void; // optional
}

export class GenericIterator<T> implements Iterator<T> {
  current: T = null;
  private _collection: T[];
  private _index = 0;

  constructor(newCollection: T[]) {
    this._collection = newCollection;
  }

  // ** move to the next item in the collection */
  next(): T {
    if (this._index >= this._collection.length) {
      this.current = null;
    } else {
      this.current = this._collection[this._index];
      this._index += 1;
    }

    return this.current;
  }

  // ** peeks to see if you can move to the next item in the collection */
  hasNext(): boolean {
    return this._index < this._collection.length;
  }
  // ** resets to the first item in the collection */
  rewind(): void {
    this._index = 0;
  }
}
