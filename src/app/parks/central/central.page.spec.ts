import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CentralPage } from './central.page';

describe('CentralPage', () => {
  let component: CentralPage;
  let fixture: ComponentFixture<CentralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CentralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
