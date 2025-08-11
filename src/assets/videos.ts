// Video assets
import thisHero from '/videos/thishero.mp4';
import js10 from '/videos/js10.mp4';
import video1Copy from '/videos/video-1 copy.mp4';
import hbg from '/videos/hbg.mp4';
import cyberAttack from '/videos/cyberattack.mp4';
import last from '/videos/last.mp4';

export const videos = {
  thisHero,
  js10,
  video1Copy,
  hbg,
  cyberAttack,
  last,
} as const;

export type VideoKeys = keyof typeof videos;