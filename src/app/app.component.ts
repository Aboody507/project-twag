import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
total=0;
qty=0;
prodname="";
  foodmenu=[
    {id:1,name:"دجاج",price:30,description:"دجاج مشوي على الفحم",img:"/assets/cheken.jpg"},
    {id:2,name:"دجاج",price:30,description:"دجاج شواية ",img:"/assets/cheken.jpg"},
    {id:3,name:"ايدام",price:20,description:"ايدام خضار مشكل",img:"/assets/edam.jpg"},
    {id:4,name:"ايدام",price:20,description:"ايدام  بالدجاج على الفرن",img:"/assets/edam2.jpg"}
 ]

sum(event:any , price:number){
const isshaken:boolean=event.target.checked;
if(isshaken){
  this.total=this.total+price;
  this.qty+=1;
}
else{
  this.total=this.total-price;
  this.qty-=1;
}
}
  title = 'manu';

  find(prod:any[]){
return prod.filter(item=>item.name.toLowerCase().includes(this.prodname.toLowerCase()))
  }
}
