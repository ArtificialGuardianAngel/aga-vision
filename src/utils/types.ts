export interface ITrainingCenterData {
  [name: string]: ITrainingModule;
}

export interface ITrainingModule {
  [item: string]: {
    description: string | null;
    git: string[];
    youtube: {
      title: string | null;
      description: string | null;
      link: string | null;
    }[];
    playlists: {
      title: string | null;
      description: string | null;
      link: string | null;
    }[];
  };
}
