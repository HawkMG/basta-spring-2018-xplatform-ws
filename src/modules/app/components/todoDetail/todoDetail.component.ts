import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {fromPromise} from 'rxjs/observable/fromPromise';
import {pluck} from 'rxjs/operators/pluck';
import {switchMap} from 'rxjs/operators/switchMap';
import {ITodoItem} from '../../../shared/models/contracts/todoItem.interface';
import {TodoService} from '../../../shared/services/base/todo.service';

@Component({
    templateUrl: './todoDetail.component.html'
})
export class TodoDetailComponent implements OnInit {
    public todoItem$: Observable<ITodoItem>;

    constructor(private readonly _activatedRoute: ActivatedRoute, private readonly _todoService: TodoService) {
    }

    public ngOnInit(): void {
        this.todoItem$ = this._activatedRoute.params.pipe(
            pluck('id'),
            switchMap((id: string) => fromPromise(this._todoService.get(id)))
        );
    }
}
