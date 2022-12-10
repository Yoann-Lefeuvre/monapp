export class FaceSnap {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public createdDate: Date,
    public imageUrl: string,
    public snaps: number,
    public location?: string
  ) {}
}
