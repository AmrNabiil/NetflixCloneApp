export interface Videos {
  id:number;
  results?: (Video)[] | null;

}
export interface Video {

      id: number;
      name: string;
      key: string;
      site: string;
      type: string;
      published_at: string;
      size:number
      original_name: string;
      popularity: number,
      profile_path: string,
    }
