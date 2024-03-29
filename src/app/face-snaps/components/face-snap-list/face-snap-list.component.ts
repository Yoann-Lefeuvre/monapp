import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  //faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;

  private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    // this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();

    interval(1000).pipe(takeUntil(this.destroy$), tap(console.log)).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
