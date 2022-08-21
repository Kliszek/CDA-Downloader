import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { parse } from 'node-html-parser';
import { PlayerData } from 'downloader/player-data.interface';

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
  async getVideoUrl(url: string, quality: string): Promise<string> {
    const playerData = await this.getPlayerData(url);
    console.log(playerData);
    const payload = this.createCDAPayload(
      playerData.video.id,
      quality,
      playerData.video.ts,
      playerData.video.hash2,
    );
    const response = await axios.post(url, payload);
    return response.data;
  }

  async getPlayerData(url: string): Promise<PlayerData> {
    const response = await axios.get(url);
    const htmlResponse = parse(response.data);
    const mediaPlayerElement = htmlResponse.querySelector(
      "[id^='mediaplayer']",
    );
    if (!mediaPlayerElement || !mediaPlayerElement.attrs['player_data']) {
      throw new Error('could not find player data');
    }

    return JSON.parse(mediaPlayerElement.attrs['player_data']) as PlayerData;
  }

  createCDAPayload = (
    id: string,
    quality: string,
    timestamp: number,
    key: string,
  ): CDAPayload => ({
    id: 1,
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
