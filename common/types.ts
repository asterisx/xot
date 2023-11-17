export interface IQuestion {
  type: string;
  id: string;
  playlist: string;
  description: string;
  image: string;
  question: string;
  options: IOption[];
  user: IUser;
  reactions: {
    likes: number;
    comments: number;
    bookmarks: number;
    shares: number;
  };
}

export interface IUser {
  name: string;
  avatar: string;
}

export interface IOption {
  id: string;
  answer: string;
}

export interface IReveal {
  id: string;
  correctOptions: IOption[];
}

export interface ICorrentAnswerResponse {
  correct_options: ICorrentAnswer[];
}

export interface ICorrentAnswer {
  answer: string;
  id: string;
}
