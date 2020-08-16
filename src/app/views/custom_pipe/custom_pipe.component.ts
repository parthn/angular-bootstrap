import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom_pipe.component.html',
  styleUrls: ['./custom_pipe.component.css']
})
export class CustomPipeComponent implements OnInit {
  str_name:string;
  constructor() { }

  ngOnInit(): void {
  }


}
