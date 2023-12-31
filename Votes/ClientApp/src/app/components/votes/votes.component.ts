import { Component } from '@angular/core';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/services/vote.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent {

  votes:Vote[] = [];

  constructor(private _voteService: VoteService) {}

  ngOnInit(){
    this._voteService.getVotes().subscribe((response:Vote[]) => {
      console.log(response);
      this.votes = response;
    });
    return this.votes;
  }

  vote(id:number):void{
    this._voteService.castVote(id).subscribe((response:Vote) =>{
      console.log(response);

      // updates votes without refreshing page
      let updateVote = this.votes.find(vote => vote.id === id);
      if (updateVote) {
        updateVote.votes++;
      }
    })
    
  }

}
