import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

@Injectable()
export class AdminTokenGuard implements CanActivate {
  constructor(private readonly config: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();
    const headerToken = req.header('x-admin-token');
    const expected = this.config.get<string>('ADMIN_TOKEN');
    if (!expected || !headerToken || headerToken !== expected) {
      throw new UnauthorizedException('Invalid admin token');
    }
    return true;
  }
}
