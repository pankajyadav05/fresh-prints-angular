import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HomeService } from '../services/home.service';
import { of } from 'rxjs';
import { User, HistoryData } from './home.interface';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let homeServiceSpy: jasmine.SpyObj<HomeService>;

  beforeEach(waitForAsync(() => {
    const spy = jasmine.createSpyObj('HomeService', [
      'searchByName',
      'getHistory',
      'saveHistory',
    ]);

    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: HomeService, useValue: spy }],
    }).compileComponents();

    homeServiceSpy = TestBed.inject(HomeService) as jasmine.SpyObj<HomeService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call searchByName() on HomeService when searchByName() is called', () => {
    const searchResult: User[] = [
      {
        login: 'test-user',
        avatar_url: '',
        html_url: '',
      },
    ];

    homeServiceSpy.searchByName.and.returnValue(
      of({ total_count: 1, items: searchResult })
    );

    component.name = 'test';
    component.searchByName();

    expect(homeServiceSpy.searchByName).toHaveBeenCalledWith('test');
    expect(component.users).toEqual(searchResult);
  });

  it('should update currentIndex when showPrevUser() is called', () => {
    component.currentIndex = 1;
    component.showPrevUser();
    expect(component.currentIndex).toBe(0);
  });

  it('should update currentIndex when showNextUser() is called', () => {
    component.currentIndex = 0;
    component.total = 2;

    component.showNextUser();
    expect(component.currentIndex).toBe(1);

    component.showNextUser();
    expect(component.currentIndex).toBe(1);
  });

  it('should add to searchHistory and call saveHistory() when showNextUser() is called and currentIndex is not 0', () => {
    const historyData: HistoryData = {
      searchTerm: 'test',
      searchResult: {
        login: 'test-user',
        avatar_url: '',
        html_url: '',
      },
    };

    component.name = 'test';
    component.total = 2;
    component.users = [historyData.searchResult];

    component.showNextUser();

    expect(component.searchHistory).toEqual([historyData]);
    expect(homeServiceSpy.saveHistory).toHaveBeenCalledWith([historyData]);
  });

  it('should not call saveHistory() when showNextUser() is called and currentIndex is 0', () => {
    component.total = 2;
    component.currentIndex = 0;

    component.showNextUser();

    expect(homeServiceSpy.saveHistory).not.toHaveBeenCalled();
  });

  it('should call getHistory() on HomeService during component initialization', () => {
    const historyData: HistoryData[] = [
      {
        searchTerm: 'test',
        searchResult: {
          login: 'test-user',
          avatar_url: '',
          html_url: '',
        },
      },
    ];

    homeServiceSpy.getHistory.and.returnValue(historyData);

    fixture.detectChanges();

    expect(homeServiceSpy.getHistory).toHaveBeenCalled();
    expect(component.searchHistory).toEqual(historyData);

    homeServiceSpy.getHistory.and.returnValue(historyData);

    fixture.detectChanges();

    expect(homeServiceSpy.getHistory).toHaveBeenCalled();
    expect(component.searchHistory).toEqual(historyData);
  });
});
