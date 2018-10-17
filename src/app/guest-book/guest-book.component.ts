import {Component, EventEmitter, OnInit, Output} from '@angular/core'

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styleUrls: ['./guest-book.component.css']
})
export class GuestBookComponent implements OnInit {
  @Output()
  countEmitter: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  incrementGuestCount() {
    this.countEmitter.emit(true)
  }
}
