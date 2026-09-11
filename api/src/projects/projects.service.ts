import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.project.findMany({
      orderBy: { order: 'asc' },
    });
  }

  create(data: {
    titleFa: string;
    titleEn: string;
    descriptionFa: string;
    descriptionEn: string;
    features: object;
    challenges: object;
    techStack: string[];
    order?: number;
  }) {
    return this.prisma.project.create({ data });
  }

  update(
    id: string,
    data: Partial<{
      titleFa: string;
      titleEn: string;
      descriptionFa: string;
      descriptionEn: string;
      features: object;
      challenges: object;
      techStack: string[];
      order: number;
    }>,
  ) {
    return this.prisma.project.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.project.delete({ where: { id } });
  }
}
