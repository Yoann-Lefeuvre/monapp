import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({ providedIn: 'root' })
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
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

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('faceSnap not found !');
    } else {
    }
    return faceSnap;
  }
}
