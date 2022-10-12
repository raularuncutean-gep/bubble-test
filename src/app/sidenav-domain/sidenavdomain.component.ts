import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenavdomain',
  templateUrl: './sidenavdomain.component.html',
  styleUrls: ['./sidenavdomain.component.scss'],
})
export class SideNavDomainComponent implements OnInit {
  @Input() width: number = 0;
  @Output() sideNavaOpen = new EventEmitter();

  right = 0;
  constructor() {}
    
  testText:string="Bofa1";
  ngOnInit(): void {}

  test() {
    this.right = 33;
    this.width = 33;
    this.sideNavaOpen.emit();
  }
}
