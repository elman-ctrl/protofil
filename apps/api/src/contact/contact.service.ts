import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateContactDto) {
    const message = await this.prisma.contactMessage.create({
      data: {
        name: dto.name,
        email: dto.email,
        message: dto.message,
      },
    });
    return {
      ok: true,
      id: message.id,
      createdAt: message.createdAt,
    };
  }

  findAll() {
    return this.prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  remove(id: string) {
    return this.prisma.contactMessage.delete({ where: { id } });
  }
}
