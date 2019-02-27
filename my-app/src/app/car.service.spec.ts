import { TestBed } from '@angular/core/testing';
import { CarService } from './car.service';
import { of, Observable } from 'rxjs';
import { Car } from 'src/app/models/car';

describe('CarService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let carService: CarService;


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    carService = new CarService(httpClientSpy as any);
});

  it('get cars', () => {
    const getCarResponse: Car[] = [

  ];
    httpClientSpy.get.and.returnValue(getCarResponse);
    carService.getCars().subscribe(
      cars => expect(cars).toEqual(getCarResponse, 'expected cars'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
