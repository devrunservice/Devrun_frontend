export interface IPagination {
  activePage?: number;
  startPage?: number;
  lastPage?: number;
  count?: number;
}

export interface IReactSlice {
  data: string[];
  loading: boolean;
  error: null | string;
}
