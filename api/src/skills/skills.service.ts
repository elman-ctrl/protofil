import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SkillsService {
  constructor(private readonly prisma: PrismaService) {}

  findCategoriesWithSkills() {
    return this.prisma.skillCategory.findMany({
      orderBy: { order: 'asc' },
      include: {
        skills: { orderBy: { order: 'asc' } },
      },
    });
  }
}
