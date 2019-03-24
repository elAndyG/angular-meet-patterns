import { Component, OnInit } from '@angular/core';
import { GenericIterator } from './iterator';

@Component({
  selector: 'app-iterator',
  templateUrl: './iterator.component.html',
  styleUrls: ['./iterator.component.scss']
})
export class IteratorComponent implements OnInit {
  currentNumber: number;
  currentWord: string;
  nextNumber: number;
  nextWord: string;

  numbers: GenericIterator<number>;
  words: GenericIterator<string>;

  ngOnInit() {
    this.numbers = new GenericIterator([1, 2, 3, 4, 5]);
    this.words = new GenericIterator(['lorem', 'ipsum', 'some', 'other', 'words']);
  }

  moveNextNumber() {
    if (!this.numbers.hasNext()) {
      this.numbers.rewind();
    }

    this.currentNumber = this.numbers.current;
    this.nextNumber = this.numbers.next();
  }
  moveNextWord() {
    if (!this.words.hasNext()) {
      this.words.rewind();
    }

    this.currentWord = this.words.current;
    this.nextWord = this.words.next();
  }

  rewindNumbers() {
    this.currentNumber = undefined;
    this.numbers.rewind();
  }
  rewindWords() {
    this.currentWord = undefined;
    this.words.rewind();
  }
}
