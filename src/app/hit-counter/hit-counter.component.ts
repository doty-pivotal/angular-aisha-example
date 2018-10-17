import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-hit-counter',
  templateUrl: './hit-counter.component.html',
  styleUrls: ['./hit-counter.component.css']
})
export class HitCounterComponent implements OnInit {
  @Input()
  count: number

  constructor() { }

  ngOnInit() {

  }

}
