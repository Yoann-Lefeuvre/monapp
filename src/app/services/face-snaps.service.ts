import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({ providedIn: 'root' })
export class FaceSnapsService {
  constructor(private http: HttpClient) {}
  faceSnaps: FaceSnap[] = [];
  /* faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Campanule',
      description: 'Fleur bleue-violacée',
      createdDate: new Date(),
      imageUrl:
        'https://cdn.pixabay.com/photo/2013/09/28/14/18/blue-187763_960_720.jpg',
      snaps: 150,
      location: 'Nantes',
    },
    {
      id: 2,
      title: 'Fritillary',
      description: 'Fleur jaune-orangée',
      createdDate: new Date(),
      imageUrl:
        'https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19830_960_720.jpg',
      snaps: 5,
      location: 'La montagne',
    },
    {
      id: 3,
      title: 'Cerisier rose titlecasepipe',
      description: 'Fleur de cerisier',
      createdDate: new Date(),
      imageUrl:
        'https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg',
      snaps: 4,
    },
  ];
  */

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    // const faceSnap = this.getFaceSnapById(faceSnapId);
    // snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(
      `http://localhost:3000/facesnaps/${faceSnapId}`
    );
  }
  addFaceSnap(formValue: {
    title: string;
    description: string;
    imageUrl: string;
    location?: string;
  }): void {
    const faceSnap: FaceSnap = {
      ...formValue,
      createdDate: new Date(),
      snaps: 0,
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1,
    };
    this.faceSnaps.push(faceSnap);
  }
}
