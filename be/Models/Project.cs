using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MyProject.Models
{
    public class Project
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public string PictureURL { get; set; }

        public DateTime CreatedAt {  get; set; }

        public DateTime UpdatedAt { get; set; }
    }


    public class ProjectDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public string PictureURL { get; set; }
    }
}
