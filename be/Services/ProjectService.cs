using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using MyProject.Models;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace MyProject.Services
{
    public interface IProjectService
    {
        Task<List<Project>> GetAllAsync();
        Task<Project> GetByIdAsync(Guid id);
        Task<Project> CreateAsync(ProjectDto project);
        Task<Project> UpdateAsync(Guid id, Project updatedProject);
        Task DeleteAsync(Guid id);
    }
    public class ProjectService : IProjectService
    {
        private readonly IMongoDatabase _database;
        private readonly IMongoCollection<Project> _model;
        public ProjectService(IMongoDatabase database, IOptions<MongoDBSettings> mongoDBSettings)
        {
            var settings = mongoDBSettings.Value;
            _database = database;
            _model = _database.GetCollection<Project>(settings.CollectionName);
        }


        public async Task<List<Project>> GetAllAsync()
        {
            var result = new List<Project>();
            using (var cursor = await _model.Find(item => true).ToCursorAsync())
            {
                while (await cursor.MoveNextAsync())
                {
                    result.AddRange(cursor.Current);
                }
            }
            return result;
        }
        public async Task<Project> GetByIdAsync(Guid id)
        {
            return await _model.Find(project => project.Id == id).FirstOrDefaultAsync();
        }
        public async Task<Project> CreateAsync(ProjectDto projectDto)

        {
            var project = new Project
            {
                Id = Guid.NewGuid(),
                Title = projectDto.Title,
                Description = projectDto.Description,
                Status = projectDto.Status,
                PictureURL = projectDto.PictureURL,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt =DateTime.UtcNow,
            };
            await _model.InsertOneAsync(project);
            return project;

        }
        public async Task<Project> UpdateAsync(Guid id, Project updatedProject)
        {

            updatedProject.UpdatedAt = DateTime.UtcNow;

            var updateResult = await _model.ReplaceOneAsync(
                project => project.Id == id,
                updatedProject
            );
            if (updateResult.MatchedCount == 0)
            {
                return null;
            }
            return updatedProject;
        }
        public async Task DeleteAsync(Guid id)
        {
            await _model.DeleteOneAsync(project => project.Id == id);
        }
    }
}



