import { Component, OnInit } from '@angular/core';

import { CarService } from 'src/app/car.service';
import { Observable } from 'rxjs';

import * as _ from 'underscore';

import { forEach } from '@angular/router/src/utils/collection';
import { Car } from 'src/app/models/car';
import { MotorShow } from 'src/app/models/motor-show';
import { CarGroup } from 'src/app/cars/car-group';
import { ModelBinder } from 'src/app/Mapper/model_binder';

@Component({
  selector: 'app-owners',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  motorShows: MotorShow[] = [];
  carsByMake: CarGroup[] = [];

  getCars(): void {
    this.carService.getCars()
        .subscribe(motorShows => {
            this.motorShows = motorShows;
            this.carsByMake = this.selectCarsByMotorShow();
          }) ;
  }

  selectCarsByMotorShow =  () => {
    const cars: Car [] = [];
    this.motorShows.forEach(motorShow => {
      const motorShowName = motorShow.name;
      motorShow.cars.forEach(car => {
       if ( cars.some (x => x.make === car.make)) {
        if(!(cars.find(x => x.make === car.make).showNames.includes(motorShowName))) {
          cars.find(x => x.make === car.make).showNames.push(motorShowName);
        }
       }
       const carObj: Car = {make: car.make, model: car.model, showNames: [motorShowName]};
       cars.push(carObj);
        });
    });
    const result: CarGroup[] = [];
    const test = _.mapObject(_.groupBy( cars , 'make'), clist => clist.map(car => _.omit(car, 'make')));

    for (let index = 0; index < _.keys(test).length; index++) {
     const carGroup: CarGroup = {
       make: _.keys(test)[index],
       carModel: _.values(test)[index]
     };
     result.push(carGroup);

    }
    return result;
    }

    constructor(private carService: CarService) {}

ngOnInit() {
      this.getCars();
    }
}
