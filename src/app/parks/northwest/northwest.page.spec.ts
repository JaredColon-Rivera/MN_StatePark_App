import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NorthwestPage } from './northwest.page';

describe('NorthwestPage', () => {
  let component: NorthwestPage;
  let fixture: ComponentFixture<NorthwestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthwestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NorthwestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
