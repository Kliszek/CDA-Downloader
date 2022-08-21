import { Injectable, InternalServerErrorException, UnprocessableEntityException } from '@nestjs/common';
import axios from 'axios';
import { parse } from 'node-html-parser';
import { PlayerData } from 'downloader/player-data.interface';
import { GetVideoUrlDTO } from 'downloader/dtos/get-video-url.dto';

interface CDAPayload {
  id: number;
  jsonrpc: string;
  method: string;
  params: {
    0: string;
    1: string;
    2: number;
    3: string;
    4?: object;
  };
}

@Injectable()
export class DownloaderService {
  async getVideoUrl(data: GetVideoUrlDTO): Promise<string> {
    if (!data.videoId) {
      throw new UnprocessableEntityException('Missing videoId in the payload');
    }
    const playerData = await this.getPlayerData(data.videoId);

    const payload = this.createCDAPayload(playerData.video.id, data.quality || playerData.video.quality, playerData.video.ts, playerData.video.hash2);
    const response = await axios.post(`https://www.cda.pl/video/${playerData.video.id}`, payload);

    return response.data;
  }

  async getPlayerData(id: string): Promise<PlayerData> {
    const response = await axios.get(`https://ebd.cda.pl/x/${id}`);
    const htmlResponse = parse(response.data);
    const mediaPlayerElement = htmlResponse.querySelector("[id^='mediaplayer']");

    if (!mediaPlayerElement || !mediaPlayerElement.attrs['player_data']) {
      throw new InternalServerErrorException('Could not find player data');
    }

    return JSON.parse(mediaPlayerElement.attrs['player_data']) as PlayerData;
  }

  createCDAPayload = (id: string, quality: string, timestamp: number, key: string): CDAPayload => ({
    id: 3,
    jsonrpc: '2.0',
    method: 'videoGetLink',
    params: {
      0: id,
      1: quality,
      2: timestamp,
      3: key,
    },
  });
}
