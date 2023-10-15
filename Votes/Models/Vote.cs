using System;
using System.Collections.Generic;

namespace Votes.Models;

public partial class Vote
{
    public int Id { get; set; }

    public string? Recipe { get; set; }

    public int? Votes { get; set; }
}
