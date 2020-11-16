import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParksPage } from './parks.page';

describe('ParksPage', () => {
  let component: ParksPage;
  let fixture: ComponentFixture<ParksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
