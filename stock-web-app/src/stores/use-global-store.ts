import { create } from 'zustand';

interface GlobalState {
  selectedLanguageCode: string;
  globalLoading: boolean;
  clientId: string;
}

export interface GlobalStore extends GlobalState {
  setSelectedLanguageCode: (code: string) => void;
  setGlobalLoading: (value: boolean) => void;
  setClientId: (value: string) => void;
}

const baseLanguage = navigator.language.split('-')[0];

const initialState: Pick<GlobalStore, keyof GlobalState> = {
  selectedLanguageCode: baseLanguage === 'vi' ? 'vi-north' : baseLanguage,
  globalLoading: false,
  clientId: '',
};

const useGlobalStore = create<GlobalStore>((set) => ({
  ...initialState,
  setSelectedLanguageCode: (code) => {
    set(() => ({ selectedLanguageCode: code }));
  },
  setGlobalLoading: (value: boolean) => set(() => ({ globalLoading: value })),
  setClientId: (value: string) => set(() => ({ clientId: value })),
}));

export default useGlobalStore;
