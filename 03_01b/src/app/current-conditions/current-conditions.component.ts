import {Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {zipCodesFeatureKey} from '../reducers/zip-codes.reducer';
import {AsyncPipe, DecimalPipe, KeyValuePipe} from '@angular/common';
import {WeatherService} from '../weather.service';
import {CurrentConditionsState} from '../reducers/current-conditions.reducer';
import {ZipCodeActions} from '../actions/zip-code.actions';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  imports: [
    DecimalPipe,
    KeyValuePipe
  ],
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  private store = inject(Store);
  currentConditions = this.store.selectSignal<CurrentConditionsState>(state => state.currentConditions);

  weatherService = inject(WeatherService);

  removeZip(zipcode: string) {
    this.store.dispatch(ZipCodeActions.removeZipCode({zipcode}));
  }


}
