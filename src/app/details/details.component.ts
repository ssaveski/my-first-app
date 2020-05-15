import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [`
    .show {
      color: white;
    }
    .details-color {
      background: lightblue;
    }

  `]
})
export class DetailsComponent implements OnInit {
  details = [];
  showDetails = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onShowDetails = () => {
    this.showDetails = !this.showDetails;
    this.details.push(Date.now().toLocaleString());
  }

}
