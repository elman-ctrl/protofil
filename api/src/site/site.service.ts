import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SiteService {
  constructor(private readonly prisma: PrismaService) {}

  getContent() {
    return this.prisma.siteContent.findUnique({ where: { id: 'default' } });
  }

  upsertContent(data: {
    hero: object;
    about: object;
    learningPath: object;
    stats: object;
  }) {
    return this.prisma.siteContent.upsert({
      where: { id: 'default' },
      create: { id: 'default', ...data },
      update: data,
    });
  }
}
