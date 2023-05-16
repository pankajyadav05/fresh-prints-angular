import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryComponent } from './history.component';
import { HomeService } from '../services/home.service';
import { HistoryData } from '../home/home.interface';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;
  let homeService: HomeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryComponent],
      providers: [HomeService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    homeService = TestBed.inject(HomeService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize search history from HomeService', () => {
    const mockHistory: HistoryData[] = [
      {
        searchTerm: 'Pankaj',
        searchResult: {
          login: 'pankaj',
          avatar_url: 'https://avatars.githubusercontent.com/u/30080?v=4',
          html_url: 'https://github.com/pankaj',
        },
      },
      {
        searchTerm: 'Manoj',
        searchResult: {
          login: 'manoj',
          avatar_url: 'https://avatars.githubusercontent.com/u/84531?v=4',
          html_url: 'https://github.com/manoj',
        },
      },
    ];
    spyOn(homeService, 'getHistory').and.returnValue(mockHistory);

    component.ngOnInit();

    expect(component.searchHistory).toEqual(mockHistory);
    expect(homeService.getHistory).toHaveBeenCalled();
  });

  it('should clear search history', () => {
    spyOn(homeService, 'clearHistory');

    component.clearHistory();

    expect(homeService.clearHistory).toHaveBeenCalled();
    expect(component.searchHistory).toEqual([]);
  });
});
