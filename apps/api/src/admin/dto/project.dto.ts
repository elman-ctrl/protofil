import {
  IsArray,
  IsInt,
  IsObject,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class LocalizedListDto {
  @IsArray()
  @IsString({ each: true })
  fa!: string[];

  @IsArray()
  @IsString({ each: true })
  en!: string[];
}

export class CreateProjectDto {
  @IsString()
  @MinLength(2)
  titleFa!: string;

  @IsString()
  @MinLength(2)
  titleEn!: string;

  @IsString()
  @MinLength(2)
  descriptionFa!: string;

  @IsString()
  @MinLength(2)
  descriptionEn!: string;

  @IsObject()
  @ValidateNested()
  @Type(() => LocalizedListDto)
  features!: LocalizedListDto;

  @IsObject()
  @ValidateNested()
  @Type(() => LocalizedListDto)
  challenges!: LocalizedListDto;

  @IsArray()
  @IsString({ each: true })
  techStack!: string[];

  @IsOptional()
  @IsUrl({ require_tld: false })
  repoUrl?: string;

  @IsOptional()
  @IsUrl({ require_tld: false })
  demoUrl?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  order?: number;
}

export class UpdateProjectDto {
  @IsOptional()
  @IsString()
  titleFa?: string;

  @IsOptional()
  @IsString()
  titleEn?: string;

  @IsOptional()
  @IsString()
  descriptionFa?: string;

  @IsOptional()
  @IsString()
  descriptionEn?: string;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => LocalizedListDto)
  features?: LocalizedListDto;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => LocalizedListDto)
  challenges?: LocalizedListDto;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  techStack?: string[];

  @IsOptional()
  @IsUrl({ require_tld: false })
  repoUrl?: string | null;

  @IsOptional()
  @IsUrl({ require_tld: false })
  demoUrl?: string | null;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(999)
  order?: number;
}
