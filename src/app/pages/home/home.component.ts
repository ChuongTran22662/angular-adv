import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {UserService} from "../../services";
import {combineLatest, concat, filter, forkJoin, map, merge, Observable, of, Subject, take, takeUntil} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, OnChanges {
  uns$ = new Subject();

  constructor(private userService: UserService) { }

  async ngOnInit() {
    const users1 = this.userService.getAll1();
    const users2 = this.userService.getAll2();

    users1.pipe(
      takeUntil(this.uns$),
      map(user => user)
    )
      .subscribe(res => {
        console.log('res1', res);
      });

    users2.pipe(takeUntil(this.uns$))
      .subscribe(res => {
        console.log('res2', res);
      });

    // merge

    const mergeUser = forkJoin(users1, users2)
      .pipe(takeUntil(this.uns$)).subscribe(res => {
        console.log('merge', res);
      });
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  ngOnDestroy() {
    this.uns$.next(null);
    this.uns$.complete();
  }

}
