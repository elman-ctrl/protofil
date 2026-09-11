import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ProjectsService } from '../projects/projects.service';
import { AdminTokenGuard } from './admin-token.guard';
import { CreateProjectDto, UpdateProjectDto } from './dto/project.dto';

@Controller('admin')
@UseGuards(AdminTokenGuard)
export class AdminController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post('projects')
  createProject(@Body() dto: CreateProjectDto) {
    return this.projectsService.create(dto);
  }

  @Patch('projects/:id')
  updateProject(@Param('id') id: string, @Body() dto: UpdateProjectDto) {
    return this.projectsService.update(id, dto);
  }

  @Delete('projects/:id')
  removeProject(@Param('id') id: string) {
    return this.projectsService.remove(id);
  }
}
