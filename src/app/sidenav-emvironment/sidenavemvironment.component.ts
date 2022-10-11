import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenavemvironment',
  templateUrl: './sidenavemvironment.component.html',
  styleUrls: ['./sidenavemvironment.component.scss']
})
export class SideNavEmvironmentComponent implements OnInit {

  @Input() width: number = 0;

 
  right = 0;
  constructor() {}

  ngOnInit(): void {}

  test(){
    this.right=33; 
    this.width=33;
  }
}
