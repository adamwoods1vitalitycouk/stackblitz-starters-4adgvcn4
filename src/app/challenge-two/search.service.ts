import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface SearchResult {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private mockData: SearchResult[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com' },
    { id: 5, name: 'Edward Norton', email: 'edward@example.com' },
    { id: 6, name: 'Fiona Apple', email: 'fiona@example.com' },
    { id: 7, name: 'George Martin', email: 'george@example.com' },
    { id: 8, name: 'Helen Carter', email: 'helen@example.com' },
  ];

  search(term: string): Observable<SearchResult[]> {
    // Simulate API call with delay
    const results = term
      ? this.mockData.filter(item =>
          item.name.toLowerCase().includes(term.toLowerCase()) ||
          item.email.toLowerCase().includes(term.toLowerCase())
        )
      : [];

    return of(results).pipe(delay(500)); // Simulate network delay
  }
}
