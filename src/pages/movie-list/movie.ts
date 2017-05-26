export class Movie {
  constructor (
    public id: number,
    public title: string,
    public overview: string,
    public poster_path: string,
    public vote_average: number,
    public vote_count: number
  ) { }
}