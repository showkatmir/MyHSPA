import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Property-card',
  templateUrl: './Property-card.component.html',
  styleUrls: ['./Property-card.component.css']
})
export class PropertyCardComponent  {

      property:any=
      {
        "id":1,
        "Name":"My First house",
        "Type":"house",
        "price":1200
      }
}


