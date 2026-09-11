import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { ProjectsModule } from '../projects/projects.module';
import { ContactModule } from '../contact/contact.module';
import { SiteModule } from '../site/site.module';
import { SkillsModule } from '../skills/skills.module';
import { AdminTokenGuard } from './admin-token.guard';

@Module({
  imports: [ProjectsModule, ContactModule, SiteModule, SkillsModule],
  controllers: [AdminController],
  providers: [AdminTokenGuard],
})
export class AdminModule {}
