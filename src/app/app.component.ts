import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule],
})
export class AppComponent {
  todoName: '' | undefined;
  todos: WritableSignal<string[]> = signal([]);

  addTodo(todo: HTMLInputElement): void {
    const item = todo.value;
    this.todos.update((todos) => [item, ...todos]);
    todo.value = '';
    todo.focus();
  }

  removeTodo(index: number): void {
    this.todos.update((todos) => [
      ...todos.slice(0, index),
      ...todos.slice(index + 1),
    ]);
  }
}
