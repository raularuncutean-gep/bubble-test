import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavEmvironmentComponent } from './sidenavemvironment.component';

describe('Sidenav2Component', () => {
  let component: SideNavEmvironmentComponent;
  let fixture: ComponentFixture<SideNavEmvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavEmvironmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavEmvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
