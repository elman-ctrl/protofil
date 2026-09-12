import { Controller, Get } from '@nestjs/common';
import { SkillsService } from './skills.service';

@Controller('skill-categories')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  findAll() {
    return this.skillsService.findCategoriesWithSkills();
  }
}
