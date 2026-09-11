import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { ProjectsModule } from '../projects/projects.module';
import { AdminTokenGuard } from './admin-token.guard';

@Module({
  imports: [ProjectsModule],
  controllers: [AdminController],
  providers: [AdminTokenGuard],
})
export class AdminModule {}
