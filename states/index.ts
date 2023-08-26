import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const accordionState = atom<number>({
  key: 'accordionState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
