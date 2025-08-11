// Image assets
import logoIcon from '/img/logoicon.png';
import azadi from '/img/azadi.jpg';
import qbz from '/img/qbz.jpg';
import welcome from '/img/Welcome.jpg';

export const images = {
  logoIcon,
  azadi,
  qbz,
  welcome,
} as const;

export type ImageKeys = keyof typeof images;