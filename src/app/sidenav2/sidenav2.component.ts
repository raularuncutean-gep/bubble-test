import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav2',
  templateUrl: './sidenav2.component.html',
  styleUrls: ['./sidenav2.component.scss']
})
export class Sidenav2Component implements OnInit {

  @Input() width: number = 0;

  @Output() sideNavaOpen =new EventEmitter();
  right = 0;
  constructor() {}

  ngOnInit(): void {}

  test(){
    this.right=33; 
    this.width=33;
  }
}
