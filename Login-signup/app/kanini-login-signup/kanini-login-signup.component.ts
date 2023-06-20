import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanini-login-signup',
  templateUrl: './kanini-login-signup.component.html',
  styleUrls: ['./kanini-login-signup.component.css']
})
export class KaniniLoginSignupComponent implements OnInit {
  imagelogo = 'assets/img/';
  imageUrl = 'assets/img/';
  currentIndex = 0;
  activeForm: 'login' | 'signup' = 'login';
  carouselTexts: { title: string, description: string }[] = [
    {
      title: 'Kanini News',
      description: 'This is the content for slide 1.'
    },
    {
      title: 'Kanini Community',
      description: 'This is the content for slide 2.'
    },
    {
      title: 'Kanini Education',
      description: 'This is the content for slide 3.'
    }
  ];

  toggleForm(form: 'login' | 'signup'): void {
    this.activeForm = form;
  }

  isActive(index: number): boolean {
    return index === this.currentIndex;
  }

  startCarousel(): void {
    setInterval(() => {
      this.currentIndex++;
      if (this.currentIndex === this.carouselTexts.length) {
        this.currentIndex = 0;
      }
    }, 2000);
  }

  getCurrentText(): { title: string, description: string } {
    return this.carouselTexts[this.currentIndex];
  }
  
  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  ngOnInit() {
    this.startCarousel();
  }
}
