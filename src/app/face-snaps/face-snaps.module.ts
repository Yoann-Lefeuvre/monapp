import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { RouterModule } from '@angular/router';
import { FaceSnapsRoutingModule } from './face-snaps-routing.module';

@NgModule({
  declarations: [
    SingleFaceSnapComponent,
    NewFaceSnapComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapsRoutingModule /* RouterModule*/,
  ],
  exports: [
    SingleFaceSnapComponent,
    NewFaceSnapComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
  ],
})
export class FaceSnapsModule {}
