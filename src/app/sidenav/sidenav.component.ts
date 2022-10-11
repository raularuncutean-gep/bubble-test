import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @Input() width: number = 0;
  right = 0;
  constructor() {}

  ngOnInit(): void {}

  test(){
    this.right=400; 
    this.width=400;
  }
}
