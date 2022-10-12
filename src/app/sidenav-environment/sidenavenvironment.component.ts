import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenavenvironment',
  templateUrl: './sidenavenvironment.component.html',
  styleUrls: ['./sidenavenvironment.component.scss']
})
export class SideNavEnvironmentComponent implements OnInit {

  @Input() width: number = 0;

 
  right = 0;
  constructor() {}

  ngOnInit(): void {}

 
}
