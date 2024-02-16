import { Component } from '@angular/core';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent {


  value:number=0
  value1:number=0
  value2:number=0
  value3:number=0
  value4:number=0
  value5:number=0
  value6:number=0
  value7:number=0

  increase(){
   
    this.value++
    
  }
  decrease(){
    if(this.value>0)
    {
      this.value--
    }
    
  }
  increase1(){
   
    this.value1++
    
  }
  decrease1(){
    if(this.value1>0)
    {
      this.value1--
    }
    
  }

  increase2(){
   
    this.value2++
    
  }
  decrease2(){
    if(this.value2>0)
    {
      this.value2--
    }
    
  }


  increase3(){
   
    this.value3++
    
  }
  decrease3(){
    if(this.value3>0)
    {
      this.value3--
    }
    
  }


  increase4(){
   
    this.value4++
    
  }
  decrease4(){
    if(this.value4>0)
    {
      this.value4--
    }
    
  }


  increase5(){
   
    this.value5++
    
  }
  decrease5(){
    if(this.value5>0)
    {
      this.value5--
    }
    
  }


  increase6(){
   
    this.value6++
    
  }
  decrease6(){
    if(this.value6>0)
    {
      this.value6--
    }
    
  }


  increase7(){
   
    this.value7++
    
  }
  decrease7(){
    if(this.value7>0)
    {
      this.value7--
    }
    
  }
}
