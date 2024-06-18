import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  PristineChangeEvent,
  StatusChangeEvent,
  TouchedChangeEvent,
  ValueChangeEvent,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = new FormControl('Initial value');

  ngOnInit() {
    this.title.events.subscribe((event) => {
      if (event instanceof TouchedChangeEvent) {
        console.log('TouchedChangeEvent', event.touched);
      }
      if (event instanceof PristineChangeEvent) {
        console.log('PristineChangeEvent', event.pristine);
      }
      if (event instanceof ValueChangeEvent) {
        console.log('ValueChangeEvent', event.value);
      }
      if (event instanceof StatusChangeEvent) {
        console.log('StatusChangeEvent', event.status);
      }
    });
  }
}
