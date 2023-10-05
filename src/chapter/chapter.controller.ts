import { Controller, Get, Param } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { Chapter } from './chapter.entity';

@Controller('chapter')
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {}

  @Get(':domain')
  async findByDomain(@Param('domain') domain: string) {
    try {
      const result = await this.chapterService.findByDomain(domain);
      if (result) {
        return result;
      } else {
        return { message: 'Chapter not found' };
      }
    } catch (error) {
      return { message: 'Error fetching chapter', error };
    }
  }

  @Get()
  findAll(): Promise<Chapter[]> {
    return this.chapterService.findAll();
  }
}
