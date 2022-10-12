import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavEnvironmentComponent } from './sidenavenvironment.component';

describe('Sidenav2Component', () => {
  let component: SideNavEnvironmentComponent;
  let fixture: ComponentFixture<SideNavEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavEnvironmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SideNavEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
