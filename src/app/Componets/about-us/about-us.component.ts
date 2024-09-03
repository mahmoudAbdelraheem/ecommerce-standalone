import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent implements OnInit, OnDestroy {
  showAddis: boolean = true;
  addSubscription!: Subscription;

  ngOnInit(): void {
    this.addSubscription = this.addisObservable.subscribe({
      next: (value) => {
        if (value === 'hidden') {
          this.showAddis = false;
        }
      },
    });
  }

  addisObservable = new Observable((observer) => {
    setTimeout(() => {
      observer.next('hidden');
    }, 2000);
  });

  ngOnDestroy(): void {
    this.addSubscription.unsubscribe();
  }
}
