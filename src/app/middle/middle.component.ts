import { Component } from '@angular/core';
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone }  from '@fortawesome/free-solid-svg-icons';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import {faCakeCandles } from '@fortawesome/free-solid-svg-icons';
import {faCapsules} from '@fortawesome/free-solid-svg-icons';
import {faMask} from '@fortawesome/free-solid-svg-icons';

interface Item {
  imageSrc: string;
  imageAlt: string
}


@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent {
glass = faChampagneGlasses
micr = faMicrophone
camera = faCamera
cake = faCakeCandles
cap = faCapsules
mask = faMask

data: Item[]= [
  {
    imageSrc: "https://images.unsplash.com/photo-1485872299829-c673f5194813?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    imageAlt: '1'
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1602618135005-165bc6b7e847?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    imageAlt: '2'
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    imageAlt: '3'
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    imageAlt: '4'
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1473968217939-ab9d99b2eacb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=792&q=80",
    imageAlt: '5'
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    imageAlt: '6'
  },

  {
    imageSrc: "https://images.unsplash.com/photo-1556035511-3168381ea4d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    imageAlt: '7'
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1596131397999-bb01560efcae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    imageAlt: '7'
  },
]
}

// 