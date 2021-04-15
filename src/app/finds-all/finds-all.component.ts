import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FindsService } from '../services/finds.service';

@Component({
  selector: 'app-finds-all',
  templateUrl: './finds-all.component.html',
  styleUrls: ['./finds-all.component.scss']
})
export class FindsAllComponent implements OnInit {

  destroy$: Subject<boolean> = new Subject<boolean>();
  Finds: any = [];

  constructor(
    private findsService: FindsService
  ) { }

  ngOnInit(): void {
    this.loadAllFinds();
    this.findsService.getAllFinds();
  }

  loadAllFinds() {
    return this.findsService.getAllFinds()
    .pipe(takeUntil(this.destroy$))
    .subscribe((data: {}) => {
      this.Finds = data;
    })
  }

  // Delete find
  deleteFind(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.findsService.deleteFind(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.loadAllFinds()
      })
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
