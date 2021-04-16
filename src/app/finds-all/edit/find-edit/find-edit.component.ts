import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FindsService } from 'src/app/services/finds.service';

@Component({
  selector: 'app-find-edit',
  templateUrl: './find-edit.component.html',
  styleUrls: ['./find-edit.component.scss']
})
export class FindEditComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  id = this.actRoute.snapshot.params['id'];
  findData: any = {};

  constructor(
    private restApi: FindsService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.restApi.getFind(this.id)
    .pipe(takeUntil(this.destroy$))
    .subscribe((data: {}) => {
      console.log('data: ',data);
      this.findData = data;
    })
  }

  // Update employee data
  updateFind() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateFind(this.id, this.findData)
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.router.navigate(['/finds-list'])
      })
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
