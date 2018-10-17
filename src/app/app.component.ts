import {Component, HostListener} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number = 5000
  selection: string

  title() { return 'jim-example' }
  getCount() {
    console.log('get count ran... again')
    return this.count
  }

  increment() {
    this.count++
  }

  @HostListener('document:keypress', ['$event'])
  handleSelection($event) {
    console.log($event)
    this.selection = $event.view.getSelection().toString()
  }
}
