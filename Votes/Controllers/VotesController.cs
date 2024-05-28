using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Votes.Models;

namespace Votes.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class VotesController : ControllerBase
    {
        private VoteDbContext dbContext = new VoteDbContext();

        [HttpPut("addVote")]
        public Vote addVote(int id)
        {
            Vote v = dbContext.Votes.FirstOrDefault(v => v.Id == id);
            v.Id = id;
            //v.Recipe = vote.Recipe;
            v.Votes++;
            dbContext.Votes.Update(v);
            dbContext.SaveChanges();
            return v;
        }

        [HttpGet("getVotes")]
        public List<Vote> getVotes()
        {
            return dbContext.Votes.ToList();
        }

        [HttpPost("addRecipe")]
        public Vote addRecipe([FromBody] Vote recipe)
        {
            dbContext.Votes.Add(recipe);
            dbContext.SaveChanges();
            return recipe;
        }
    }
}
