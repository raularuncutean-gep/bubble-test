import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() width: number = 0;
  @Output() sideNavaOpen = new EventEmitter();

  right = 0;
  constructor() {}

  ngOnInit(): void {}

  test() {
    this.right = 33;
    this.width = 33;
    this.sideNavaOpen.emit();
  }
}
