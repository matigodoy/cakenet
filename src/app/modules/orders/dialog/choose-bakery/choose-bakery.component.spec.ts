import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBakeryComponent } from './choose-bakery.component';

describe('ChooseBakeryComponent', () => {
  let component: ChooseBakeryComponent;
  let fixture: ComponentFixture<ChooseBakeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseBakeryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseBakeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
