import { Component,ElementRef, ViewChild  } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CurrencyApp';
  amount :any;
  result :any;

  currencyExange :any = {
    USD: 1.126735,
    GBP: 0.876893,
    INR: 79.6770
}

  @ViewChild('fromCurrency') scy!: ElementRef;
  @ViewChild('toCurrency') toCurrency!: ElementRef;

  currencyList: any = ['USD', 'GBP', 'INR'] 
  onClickMe() {
    if(this.convertFrom == "")
    return;
    if(this.convertTo == "")
    return;
   
    let resultTest = this.convert(this.amount, this.convertFrom, this.convertTo);
    resultTest = parseFloat(resultTest.toFixed(2)); // result to 2 decimal places
      this.result = `${this.amount} ${this.convertFrom} = ${resultTest} ${this.convertTo}`;
  }
  

  convert(amount: number, from: string, to: string): number {
    let fromConversionCoefficient: number =this.getConversionCoefficient(from);

    let toConversionCoefficient: number = this.getConversionCoefficient(to);

    return (toConversionCoefficient / fromConversionCoefficient) * amount;
  }
 
  getConversionCoefficient(cur: string){
   let ret=0;
    switch(cur){
      case "USD": ret =this.currencyExange.USD;
      break;
      case "GBP": ret =this.currencyExange.GBP;
      break;
      case "INR": ret =this.currencyExange.INR;
      break;
    }

    return ret;
  }
	convertFrom = '';
	onSourceSelected():void {
		this.convertFrom = this.scy.nativeElement.value;
	}

  convertTo = '';
	onTargetSelected():void {
		this.convertTo = this.toCurrency.nativeElement.value;
	}
}
