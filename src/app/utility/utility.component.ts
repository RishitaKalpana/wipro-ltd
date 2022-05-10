import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css']
})
export class UtilityComponent implements OnInit {
  currentNumber = '0';
  firstOperand :number=0;
  operator:string | any;
  waitForSecondNumber = false;
  constructor() { }

  ngOnInit(): void {
  }
  public getNumber(v: string):void{
    console.log(v);
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;
    }
  }
  getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.';
    }
  }
  private doCalculation(op:string , secondOp:number):number{
    switch (op){
      case '+':
      return this.firstOperand += secondOp;
      case '-':
      return this.firstOperand -= secondOp;
      case '*':
      return this.firstOperand *= secondOp;
      case '/':
      return this.firstOperand /= secondOp;
      case '=':
      return this.firstOperand;
    }return this.firstOperand;
  }
  public getOperation(op: string){
    console.log(op);
    if(this.firstOperand === null){
      this.firstOperand = Number(this.currentNumber);
    }else if(this.operator){
      const result:number| any= this.doCalculation(this.operator , Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;
    console.log(this.firstOperand);
  }
  public clear(){
    this.currentNumber = '0';
    this.firstOperand =0;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
}
