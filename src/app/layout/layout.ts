import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-layout',
  imports: [],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit {

  public count = signal(0);

  ngOnInit(): void {
  }

  public set(): void {
    this.count.set(this.count() + 1);

  }

  public update(): void {
    this.count.update(value => value + 1);
  }
}
