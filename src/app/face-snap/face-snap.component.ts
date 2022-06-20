import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapped!: boolean;
  snapText!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.snapped = false;
    this.snapText = 'Oh snap !';
  }
  onSnap() {
    if (!this.snapped) {
      this.snapText = 'oops un snap !';
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.snapped = true;
    } else {
      this.snapText = 'Oh snap !';
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapped = false;
    }
  }
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
