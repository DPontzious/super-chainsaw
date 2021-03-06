import { Component, OnInit } from '@angular/core';
import { GitSearch } from '../git-search'
import { GitSearchService } from '../git-search.service'

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
// INLINE STYLING CAN BE WRITTEN AS FOLLOWING
// @Component({
//   selector: 'app-git-search',
//   template: `
//   <p>
//     git-search works!
//   </p>`,
//   styles: ['p { background: red; }']
// })
export class GitSearchComponent implements OnInit {
  searchResults: GitSearch;
  searchQuery: string;
  constructor(private GitSearchService: GitSearchService) { }

  ngOnInit() {
    this.GitSearchService.gitSearch('angular').then((response) => {
      this.searchResults = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

  gitSearch = () => {
    this.GitSearchService.gitSearch(this.searchQuery).then((response) => {
      this.searchResults = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }


}
