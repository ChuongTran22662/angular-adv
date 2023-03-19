import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable()
export class RxjsService {
  private searchQuery = new Subject<string>();
  private messages = new BehaviorSubject<string[]>(['1231', 'chat thu']);
  public messages$ = this.messages.asObservable();
  constructor() {}

  setSearchQuery(query: string) {
    this.searchQuery.next(query);
  }

  getSearchQuery() {
    return this.searchQuery.asObservable();
  }

  public addMessage(message: string) {
    const currentMessages = this.messages.getValue();
    const updatedMessages = [...currentMessages, message];
    this.messages.next(updatedMessages);
  }
}
