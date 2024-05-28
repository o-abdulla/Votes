import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Vote } from '../models/vote';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  castVote(id:number):Observable<Vote>{
    return this.http.put<Vote>(`${this.baseUrl}votes/addVote?id=${id}`, {});
  }

  getVotes():Observable<Vote[]>{
    return this.http.get<Vote[]>(`${this.baseUrl}votes/getVotes`);
  }

  addRecipe(recipe:Vote):Observable<Vote>{
    return this.http.post<Vote>(`${this.baseUrl}votes/addRecipe`, recipe);
  }

}
