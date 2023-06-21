import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 'Button 6', 'Button 7', 'Button 8', 'Button 9', 'Button 10', 'Button 11', 'Button 12', 'Button 13', 'Button 14', 'Button 15', 'Button 16', 'Button 17', 'Button 18', 'Button 19', 'Button 20', 'Button 21'];

  changeButtonColor(button: HTMLElement) {
    button.style.backgroundColor = '#000';
    button.style.color = '#fff';
  }
  constructor(private router: Router) {}

  onClickContinue() {
    this.router.navigateByUrl('/blog');
  }
  
}
