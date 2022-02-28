import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      createdDate: new Date,
      snaps: 50,
      imageUrl: 'https://cdn.pixabay.com/photo/2018/08/11/22/53/teddy-bear-3599680_960_720.jpg',
      location: 'Le jardin'
    },
    {
      id: 2,
      title: 'Doggo',
      description: 'Le meilleur ami de l\'homme.',
      createdDate: new Date,
      snaps: 150,
      imageUrl: 'https://cdn.pixabay.com/photo/2021/01/30/15/14/akita-5964180_960_720.jpg'
    },
    {
      id: 3,
      title: 'Le mont St.Michel',
      description: 'Un château magnifique.',
      createdDate: new Date,
      snaps: 255,
      imageUrl: 'https://cdn.pixabay.com/photo/2022/01/08/14/09/mont-saint-michel-6924072_960_720.jpg',
      location: 'Mont St. Michel'
    }
  ]

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps
  }

  getFaceSnapById(snapFaceId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === snapFaceId)
    if(!faceSnap) {
      throw new Error('FaceSnap not found!')
    } else {
      return faceSnap
    }
  }
  snapFaceSnapById(snapFaceId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(snapFaceId)
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--
  }
}