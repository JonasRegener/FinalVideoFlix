import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfildialogComponent } from './profildialog.component';

describe('ProfildialogComponent', () => {
  let component: ProfildialogComponent;
  let fixture: ComponentFixture<ProfildialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfildialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfildialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
