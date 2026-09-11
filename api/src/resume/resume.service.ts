import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ResumeService {
  constructor(private readonly prisma: PrismaService) {}

  async getFullResume() {
    const [meta, experiences, skillGroups, keyProjects] = await Promise.all([
      this.prisma.resumeMeta.findUnique({ where: { id: 'default' } }),
      this.prisma.resumeExperience.findMany({ orderBy: { order: 'asc' } }),
      this.prisma.resumeSkillGroup.findMany({ orderBy: { order: 'asc' } }),
      this.prisma.project.findMany({
        orderBy: { order: 'asc' },
        take: 5,
        select: {
          id: true,
          titleFa: true,
          titleEn: true,
          descriptionFa: true,
          descriptionEn: true,
          techStack: true,
        },
      }),
    ]);

    return { meta, experiences, skillGroups, keyProjects };
  }
}
