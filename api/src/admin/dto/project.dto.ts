import {
  IsArray,
  IsInt,
  IsObject,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

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
  features!: { fa: string[]; en: string[] };

  @IsObject()
  challenges!: { fa: string[]; en: string[] };

  @IsArray()
  @IsString({ each: true })
  techStack!: string[];

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
  features?: { fa: string[]; en: string[] };

  @IsOptional()
  @IsObject()
  challenges?: { fa: string[]; en: string[] };

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  techStack?: string[];

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(999)
  order?: number;
}
