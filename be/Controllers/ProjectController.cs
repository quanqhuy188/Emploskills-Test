using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;
using MyProject.Models;
using MyProject.Services;

namespace MyProject.Controllers
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ProjectController : ControllerBase
    {

        private readonly IProjectService _service;
        private readonly ILogger<ProjectController> _logger;

        public ProjectController(ILogger<ProjectController> logger, IProjectService service)
        {
            _logger = logger;
            _service = service;
        }

        [HttpGet("get-all")]
        public async Task<ActionResult<List<Project>>> Get()
        {
            try
            {
                var projects = await _service.GetAllAsync();
                if (projects == null)
                {
                    return NotFound("No projects found.");
                }

                return Ok(projects);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
        [HttpGet("get-by-id")]
        public async Task<ActionResult<Project>> GetById([FromQuery] Guid id)
        {
            try
            {
                var project = await _service.GetByIdAsync(id);

                if (project == null)
                {
                    return NotFound($"Project with ID {id} not found.");
                }

                return Ok(project);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost("create")]
        public async Task<ActionResult<Project>> Create([FromBody] ProjectDto project)
        {
            try
            {
                if (project == null)
                {
                    return BadRequest("Project object is null.");
                }

                var createdProject = await _service.CreateAsync(project);

                if (createdProject == null)
                {
                    return StatusCode(500, "An error occurred while creating the project.");
                }
                return Ok(createdProject);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPut("edit")]
        public async Task<IActionResult> Update([FromBody] Project project)
        {
            try
            {
                if (project == null || project.Id == Guid.Empty)
                {
                    return BadRequest("Project object or ID is null.");
                }

                var existingProject = await _service.GetByIdAsync(project.Id);
                if (existingProject == null)
                {
                    return NotFound($"Project with ID {project.Id} not found.");
                }


                var model = await _service.UpdateAsync(project.Id, project);

                return Ok(model);
            }
            catch (Exception ex)
            {


                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("delete")]
        public async Task<IActionResult> Delete([FromQuery] Guid id)
        {
            try
            {
                var project = await _service.GetByIdAsync(id);

                if (project == null)
                {
                    return NotFound($"Project with ID {id} not found.");
                }

                await _service.DeleteAsync(id);

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
