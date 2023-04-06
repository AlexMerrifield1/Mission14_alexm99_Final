using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission13_alexm99.Data;

namespace Mission13_alexm99.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            return context.Movies.ToArray();
        }
    }
}
