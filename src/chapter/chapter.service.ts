import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chapter } from './chapter.entity';

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(Chapter)
    private chapterRepository: Repository<Chapter>,
  ) {}

  async findByDomain(domain: string): Promise<Chapter> {
    return this.chapterRepository.findOne({ where: { domain } });
  }

  findAll(): Promise<Chapter[]> {
    return this.chapterRepository.find();
  }
}
