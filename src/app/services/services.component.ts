import { Component } from '@angular/core';
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone }  from '@fortawesome/free-solid-svg-icons';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import {faCakeCandles } from '@fortawesome/free-solid-svg-icons';
import {faCapsules} from '@fortawesome/free-solid-svg-icons';
import {faMask} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  glass = faChampagneGlasses
  micr = faMicrophone
  camera = faCamera
  cake = faCakeCandles
  cap = faCapsules
  mask = faMask
}
