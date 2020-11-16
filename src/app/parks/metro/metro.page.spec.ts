import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetroPage } from './metro.page';

describe('MetroPage', () => {
  let component: MetroPage;
  let fixture: ComponentFixture<MetroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
