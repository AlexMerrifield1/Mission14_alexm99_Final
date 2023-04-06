using System.ComponentModel.DataAnnotations;

namespace Mission13_alexm99.Data
{
    public class Movie
    {
        [Key]
        public int MovieId { get; set; }
        public string? Category { get; set; }
        public string? Title { get; set; }
        public int? Year { get; set; }
        public string? Director { get; set; }
        public int? Rating { get; set; }
        public string? Edited { get; set; }
    }
}
