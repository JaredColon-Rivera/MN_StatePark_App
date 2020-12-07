import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NortheastDetailsPage } from './northeast-details.page';

describe('NortheastDetailsPage', () => {
  let component: NortheastDetailsPage;
  let fixture: ComponentFixture<NortheastDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NortheastDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NortheastDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
