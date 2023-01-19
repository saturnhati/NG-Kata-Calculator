import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewRef,
} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  @ViewChild('firstvalue') firstvalue!: ElementRef;
  @ViewChild('secondvalue') secondvalue!: ElementRef;
  result!: number;

  constructor() {}

  ngOnInit(): void {}

  add() {
    let a: number = Number(this.firstvalue.nativeElement.value);
    let b: number = Number(this.secondvalue.nativeElement.value);
    this.result = a + b;
  }

  subtract() {
    let a: number = Number(this.firstvalue.nativeElement.value);
    let b: number = Number(this.secondvalue.nativeElement.value);
    this.result = a - b;
  }

  multiply() {
    let a: number = Number(this.firstvalue.nativeElement.value);
    let b: number = Number(this.secondvalue.nativeElement.value);
    this.result = a * b;
  }

  divide() {
    let a: number = Number(this.firstvalue.nativeElement.value);
    let b: number = Number(this.secondvalue.nativeElement.value);
    this.result = a / b;
  }
}
