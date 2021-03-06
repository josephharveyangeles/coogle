import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input()
  label: string;

  value: string;
  matchType = 'all';

  constructor() { }

  ngOnInit() {
  }

  public getInputValue(): string {
    return this.value;
  }

  public clear() {
    this.value = null;
    this.matchType = 'all';
  }

  public getMatchType(): string {
    return this.matchType;
  }

  toggleMatchType() {
    if (this.matchType === 'all') {
      this.matchType = 'any';
      return;
    }
    this.matchType = 'all';
  }

}
