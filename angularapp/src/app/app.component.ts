import { Component,ElementRef, ViewChild ,Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CurrencyApp';
  result1 :any;



  @ViewChild('fromCurrency') fromCurrency!: ElementRef;
  @ViewChild('toCurrency') toCurrency!: ElementRef;
  @ViewChild("amount") amount!: ElementRef;
  @ViewChild("resValue") resValue!: ElementRef;
 
  constructor(private renderer: Renderer2) {}

  currencyListObj:any=  [ { "id":"USD",  "value": 1.126735}, { "id":"GBP", "value":0.876893}, { "id":"INR", "value":79.677056}];

  onClickMe() {
    if(this.convertFrom == ""){
    return;
    }
    
    if(this.convertTo == ""){
    return;
    }
   
    let resultTest = this.convert(this.amount.nativeElement.value, this.convertFrom, this.convertTo);
 
      //this.result = resultTest;
      this.renderer.setProperty(this.resValue.nativeElement, 'innerText', resultTest);
  }
  

  convert(amount: number, from: number, to: number): string {
   let am= Math.round((to / from) * amount);

    return  (am).toFixed(2).toString();
  }
 

	convertFrom :any;
	onSourceSelected():void {
		this.convertFrom = parseFloat( this.fromCurrency.nativeElement.value);
	}

  convertTo :any;
	onTargetSelected():void {
		this.convertTo = parseFloat(this.toCurrency.nativeElement.value);
	}
}
