import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-table',
  templateUrl: './tabla-personajes.component.html',
  styleUrls: ['./tabla-personajes.component.css'],
})
export class CharacterTableComponent implements OnInit {
  personajes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>('https://rickandmortyapi.com/api/character')
      .subscribe((data) => {
        this.personajes = data.results;
      });
  }
}
