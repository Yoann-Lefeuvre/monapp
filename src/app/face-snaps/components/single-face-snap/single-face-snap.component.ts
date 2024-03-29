import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  //faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;

  snapText!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.snapText = 'Oh snap !';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }
  onSnap(faceSnapId: number) {
    if (this.snapText === 'Oh snap !') {
      this.faceSnap$ = this.faceSnapsService
        .snapFaceSnapById(faceSnapId, 'snap')
        .pipe(
          tap(() => {
            this.snapText = 'oops un snap !';
          })
        );
    } else {
      this.faceSnap$ = this.faceSnapsService
        .snapFaceSnapById(faceSnapId, 'unsnap')
        .pipe(
          tap(() => {
            this.snapText = 'Oh snap !';
          })
        );
    }
  }
}
