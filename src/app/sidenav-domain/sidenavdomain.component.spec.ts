import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavDomainComponent } from './sidenavdomain.component';

describe('SidenavComponent', () => {
  let component: SideNavDomainComponent;
  let fixture: ComponentFixture<SideNavDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavDomainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
