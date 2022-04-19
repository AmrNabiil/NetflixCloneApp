export interface Credits {
  Cid:number;
  cast?: (Cast)[] | null;
  crew?: (Crew)[] | null;

}
export interface Cast {

      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number,
      profile_path: string,
      cast_id: number,
      character: string,
      credit_id: string,
      order: number
}
export interface Crew {

  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number,
  profile_path: string,
  cast_id: number,
  character: string,
  credit_id: string,
  order: number
}

