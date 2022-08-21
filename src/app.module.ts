import { Module } from '@nestjs/common';
import { DownloaderModule } from 'downloader/downloader.module';

@Module({
  imports: [DownloaderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
