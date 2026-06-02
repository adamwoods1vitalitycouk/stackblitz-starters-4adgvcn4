import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subject, of } from 'rxjs';
import { takeUntil, debounceTime, switchMap, tap, catchError } from 'rxjs/operators';

import { SearchService, SearchResult } from './search.service';

@Component({
  selector: 'app-challenge-two',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Challenge 2: Implement RxJS Search 🔍</h2>
    <p><strong>Requirements:</strong></p>
    <ul>
      <li>Implement search with 300ms debounce</li>
      <li>Cancel previous API calls when new search starts (use switchMap)</li>
      <li>Show loading indicator while searching</li>
      <li>Handle errors gracefully</li>
      <li>Properly unsubscribe on component destroy</li>
    </ul>

    <div class="card">
      <h3>Search Users</h3>

      <input
        type="text"
        [formControl]="searchControl"
        placeholder="Type to search users..."
        class="search-input"
      />

      @if (isLoading) {
        <div class="loading">🔄 Searching...</div>
      }
      @if (error) {
        <div class="error">{{ error }}</div>
      }

      <div class="results">
        @for (result of results; track result.id) {
          <div class="result-item">
            <strong>{{ result.name }}</strong> - {{ result.email }}
          </div>
        }
        @if (!isLoading && results.length === 0 && searchControl.value) {
          <div class="no-results">
            No results found for "{{ searchControl.value }}"
          </div>
        }
      </div>
    </div>

    <details class="hints">
      <summary>💡 Hints (click to expand)</summary>
      <ul>
        <li>Pattern is similar to your clt-app: post-code.component.ts and condition-details.component.ts</li>
        <li>Listen to: this.searchControl.valueChanges</li>
        <li>Chain operators: pipe(debounceTime(300), tap(...), switchMap(...), catchError(...), takeUntil(...))</li>
        <li>Set isLoading in tap() before switchMap</li>
        <li>Call this.searchService.search(term) inside switchMap</li>
        <li>Use this.destroy$ with takeUntil() to unsubscribe</li>
        <li>Subscribe and set results + isLoading = false</li>
      </ul>
    </details>
  `,
  styles: [`
    h2 { color: #333; }
    ul {
      background: #fff3cd;
      border: 1px solid #ffc107;
      border-radius: 4px;
      padding: 15px 15px 15px 35px;
      margin: 15px 0;
    }
    li { margin: 5px 0; }
    .card {
      padding: 20px;
      background: #f9f9f9;
      border-radius: 4px;
      margin-top: 10px;
    }
    h3 {
      margin-top: 0;
      color: #555;
    }
    .search-input {
      width: 100%;
      padding: 12px;
      font-size: 16px;
      border: 2px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
      transition: border-color 0.3s;
    }
    .search-input:focus {
      outline: none;
      border-color: #007bff;
    }
    .loading {
      margin-top: 10px;
      color: #007bff;
      font-style: italic;
      padding: 10px;
      background: #e7f3ff;
      border-radius: 4px;
    }
    .error {
      margin-top: 10px;
      padding: 10px;
      background: #f8d7da;
      border: 1px solid #f5c6cb;
      color: #721c24;
      border-radius: 4px;
    }
    .results {
      margin-top: 20px;
    }
    .result-item {
      padding: 12px;
      background: white;
      margin-bottom: 8px;
      border-radius: 4px;
      border: 1px solid #ddd;
      transition: all 0.2s;
    }
    .result-item:hover {
      border-color: #007bff;
      box-shadow: 0 2px 4px rgba(0,123,255,0.1);
    }
    .no-results {
      padding: 20px;
      text-align: center;
      color: #666;
      font-style: italic;
      background: white;
      border-radius: 4px;
      border: 1px dashed #ccc;
    }
    .hints {
      margin-top: 30px;
      padding: 15px;
      background: #e7f3ff;
      border: 1px solid #007bff;
      border-radius: 4px;
    }
    .hints summary {
      cursor: pointer;
      font-weight: bold;
      color: #0056b3;
    }
    .hints ul {
      background: transparent;
      border: none;
      padding-left: 20px;
    }
  `]
})
export class ChallengeTwoComponent implements OnInit, OnDestroy {
  searchControl = new FormControl('');
  results: SearchResult[] = [];
  isLoading = false;
  error = '';
  private destroy$ = new Subject<void>();

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    // TODO: Implement the search logic here
    // 1. Listen to searchControl.valueChanges
    // 2. Add debounceTime(300)
    // 3. Use tap() to set isLoading = true and clear error
    // 4. Use switchMap to call searchService.search(searchTerm)
    // 5. Use catchError to handle errors
    // 6. Use takeUntil(this.destroy$) to unsubscribe
    // 7. Subscribe and update results + isLoading = false

    // HINT: Pattern from your clt-app files:
    // this.searchControl.valueChanges.pipe(
    //   debounceTime(300),
    //   tap(() => { this.isLoading = true; this.error = ''; }),
    //   switchMap(term => this.searchService.search(term || '').pipe(
    //     catchError(err => { ... })
    //   )),
    //   takeUntil(this.destroy$)
    // ).subscribe(results => { ... });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

/* SOLUTION:

ngOnInit() {
  this.searchControl.valueChanges
    .pipe(
      debounceTime(300),
      tap(() => {
        this.isLoading = true;
        this.error = '';
      }),
      switchMap(term =>
        this.searchService.search(term || '').pipe(
          catchError(err => {
            this.error = 'Search failed. Please try again.';
            this.isLoading = false;
            return of([]);
          })
        )
      ),
      takeUntil(this.destroy$)
    )
    .subscribe(results => {
      this.results = results;
      this.isLoading = false;
    });
}
*/
