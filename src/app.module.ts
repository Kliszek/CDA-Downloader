import { Module } from '@nestjs/common';
import { DownloaderModule } from 'downloader/downloader.module';
import { AppController } from 'app.controller';

@Module({
  imports: [DownloaderModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
