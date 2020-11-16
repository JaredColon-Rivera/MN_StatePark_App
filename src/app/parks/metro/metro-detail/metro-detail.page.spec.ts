import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetroDetailPage } from './metro-detail.page';

describe('MetroDetailPage', () => {
  let component: MetroDetailPage;
  let fixture: ComponentFixture<MetroDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetroDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetroDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
