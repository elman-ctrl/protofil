import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProjectsService } from '../projects/projects.service';
import { ContactService } from '../contact/contact.service';
import { SiteService } from '../site/site.service';
import { SkillsService } from '../skills/skills.service';
import { PrismaService } from '../prisma/prisma.service';
import { AdminTokenGuard } from './admin-token.guard';
import { CreateProjectDto, UpdateProjectDto } from './dto/project.dto';

@Controller('admin')
@UseGuards(AdminTokenGuard)
export class AdminController {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly contactService: ContactService,
    private readonly siteService: SiteService,
    private readonly skillsService: SkillsService,
    private readonly prisma: PrismaService,
  ) {}

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

  @Get('contact')
  listContact() {
    return this.contactService.findAll();
  }

  @Delete('contact/:id')
  removeContact(@Param('id') id: string) {
    return this.contactService.remove(id);
  }

  @Get('skill-categories')
  listSkills() {
    return this.skillsService.findCategoriesWithSkills();
  }

  @Put('site')
  updateSite(
    @Body()
    body: {
      hero: object;
      about: object;
      learningPath: object;
      stats: object;
    },
  ) {
    return this.siteService.upsertContent(body);
  }

  @Patch('resume/meta')
  updateResumeMeta(
    @Body()
    body: Partial<{
      summaryFa: string;
      summaryEn: string;
      headlineFa: string;
      headlineEn: string;
      locationFa: string;
      locationEn: string;
    }>,
  ) {
    return this.prisma.resumeMeta.update({
      where: { id: 'default' },
      data: body,
    });
  }
}
