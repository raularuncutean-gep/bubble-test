import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentItemComponent } from './environment-item.component';

describe('EnvironmentItemComponent', () => {
  let component: EnvironmentItemComponent;
  let fixture: ComponentFixture<EnvironmentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
