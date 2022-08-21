export interface PlayerData {
  id: string;
  ads: object;
  video: {
    id: string;
    file: string;
    file_cast?: any;
    cast_available: boolean;
    manifest?: any;
    manifest_cast?: any;
    manifest_drm_proxy?: any;
    manifest_drm_header?: any;
    manifest_drm_pr_proxy?: any;
    manifest_drm_pr_header?: any;
    manifest_apple?: any;
    manifest_drm_apple_certificate?: any;
    manifest_drm_apple_license?: any;
    manifest_audio_stereo_bitrate: number;
    manifest_forced_audio_hd: boolean;
    manifest_auto_quality: boolean;
    duration: string;
    durationFull: string;
    poster: string;
    type: string;
    video_promoted: boolean;
    width: number;
    height: number;
    content_rating?: any;
    quality: string;
    qualities: Record<string, string>;
    quality_change_in_player: boolean;
    ts: number;
    hash: string;
    hash2: string;
    premium_categories: string;
    title: string;
    thumb: string;
  };
  nextVideo: {
    id: string;
    title: string;
    thumb: string;
    user: string;
    quality?: any;
    link: string;
  };
  autoplay: boolean;
  seekTo: number;
  premium: boolean;
  api: {
    client: string;
    client2: string;
    ts: string;
    key: string;
    method: string;
  };
  user: {
    role: string;
    id: number;
    uid: string;
    gender: string;
    video_history: boolean;
  };
  plista: boolean;
  adOnPauseEnabled: boolean;
  adOnPauseElement: string;
}
