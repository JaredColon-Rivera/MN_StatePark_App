import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NorthwestDetailsPage } from './northwest-details.page';

describe('NorthwestDetailsPage', () => {
  let component: NorthwestDetailsPage;
  let fixture: ComponentFixture<NorthwestDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthwestDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NorthwestDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
