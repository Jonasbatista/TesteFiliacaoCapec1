import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prv-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() type!: string;
  icon!: string;

  constructor() { }

  ngOnInit() {

    switch (this.type) {
      case 'warning':
        this.icon = 'assets/images/attention.svg';
        break;
      case 'success':
        this.icon = 'assets/images/tip.svg';
        break;
      case 'alert':
        this.icon = 'assets/images/attention.svg';
        break;
      default:
        this.icon = 'assets/images/tip.svg';
        break;
    }

  }

}

