import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  dailyCodes: Observable<any[]>;
  constructor(db: AngularFirestore) {
    let query = ref => ref.orderBy('date','asc')
    this.dailyCodes = db.collection('dailycode',query).valueChanges();
  }

  ngOnInit() {
  }

}
