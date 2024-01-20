import { TestBed } from '@angular/core/testing';
import { CustomerService } from './customer.service';
import { CustomerDTO } from '../model/customerDTO';
import { HttpClientTestingModule} from "@angular/common/http/testing" ;
import { of } from "rxjs" ;

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerService]
    });
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it ( 'should initialize all (mocked) database entries' , ( ) => {
    let spy = spyOn<CustomerService, any>(service, 'listCustomers')
    .and.returnValue(of([
      new CustomerDTO("12342", "Stephen King", "Broadway, Bangor", "ME", "+0-1-32342-23423", 666666, "Author", "Writes good books"),
      new CustomerDTO("44534", "Thomas Harris", "Oldway, New York", "NY", "+0-1-3535-23667", 5400, "Author", ""),
      new CustomerDTO("43355", "Jo Nesbo", "Snowway, Oslo", "NO", "+4-5-34378-12323", 2500, "Author", "")
    ]));

    service.listCustomers().subscribe(customers => {
      expect(customers.length).toEqual(3);
    })
  });
});
