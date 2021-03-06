import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrenosotrosComponent } from './sobrenosotros.component';

describe('SobrenosotrosComponent', () => {
  let component: SobrenosotrosComponent;
  let fixture: ComponentFixture<SobrenosotrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobrenosotrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobrenosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
