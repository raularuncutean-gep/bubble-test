import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-domain-button',
  templateUrl: './domain-button.component.html',
  styleUrls: ['./domain-button.component.scss'],
})
export class DomainButtonComponent implements OnInit {
  @Input() textButton!: string;

  constructor() {}

  ngOnInit(): void {}
}
