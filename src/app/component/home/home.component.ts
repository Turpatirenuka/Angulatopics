import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  required=true;
  interpt="Hai,This is interpolation";
  cb="cbcss";

cb2={
  cbcss1:this.required,
  cbcss2:this.required
}
sb={
  'text-align':'center',
  'color':'pink',
  'font-size':'50px',
  'background-color':'green'
}
eb=""
fun(){
  this.eb="Hai,This is event binding interpolation"
}
x={
  Renu:this.required,
  Sriram:this.required
}

y="";

ngs="2";

yx=["a","b","c","d","e","f"];

m={
  Name:"Renu",
  "Age":21,
  "Place":"Golzam",
  "Qualification":"Graduation"
};

s=[
  {
    Name:"Renu",
    "Age":21,
    "Place":"Golzam",
    "Qualification":"Graduation"
  },
  {
    Name:"Sriram",
    "Age":21,
    "Place":"Golzam",
    "Qualification":"Graduation"
  }
]

}



