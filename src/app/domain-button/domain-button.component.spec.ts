import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainButtonComponent } from './domain-button.component';

describe('DomainButtonComponent', () => {
  let component: DomainButtonComponent;
  let fixture: ComponentFixture<DomainButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
