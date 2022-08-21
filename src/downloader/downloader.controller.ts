import { Body, Controller, Post } from '@nestjs/common';
import { DownloaderService } from 'downloader/downloader.service';
import { GetVideoUrlDTO } from 'downloader/dtos/get-video-url.dto';

@Controller('downloader')
export class DownloaderController {
  constructor(private readonly downloaderService: DownloaderService) {}

  @Post('')
  async getVideoUrl(@Body() getVideoUrlDto: GetVideoUrlDTO) {
    console.log(getVideoUrlDto);
    return this.downloaderService.getVideoUrl(getVideoUrlDto);
  }
}
