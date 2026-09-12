import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ProjectsModule } from './projects/projects.module';
import { SkillsModule } from './skills/skills.module';
import { ResumeModule } from './resume/resume.module';
import { ContactModule } from './contact/contact.module';
import { AdminModule } from './admin/admin.module';
import { HealthModule } from './health/health.module';
import { SiteModule } from './site/site.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    HealthModule,
    SiteModule,
    ProjectsModule,
    SkillsModule,
    ResumeModule,
    ContactModule,
    AdminModule,
  ],
})
export class AppModule {}
