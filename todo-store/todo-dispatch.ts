import { from } from 'rxjs';
import { todoReducer } from './todo-reducer';
import { store$ } from './todo-store';

export const todoDispatcher = action => {
  from(todoReducer(store$.value, action)).subscribe({
    next: (data: any) => store$.next(data),
    error: data => store$.error(data)
  });
};
