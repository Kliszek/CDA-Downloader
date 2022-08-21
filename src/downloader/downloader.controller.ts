import { Controller, Get } from '@nestjs/common';
import { DownloaderService } from 'downloader/downloader.service';

@Controller('downloader')
export class DownloaderController {
  constructor(private readonly downloaderService: DownloaderService) {}

  @Get('')
  async getVideoUrl() {
    return this.downloaderService.getVideoUrl(
      'https://www.cda.pl/video/11653328ff/vfilm',
      'hd',
    );
  }
}
