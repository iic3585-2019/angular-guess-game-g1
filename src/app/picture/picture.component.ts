import { Component, OnInit } from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {PictureState} from '../../store/picture/picture.state';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  @Select(PictureState.getLoading) loading: Observable<boolean>;
  @Select(PictureState.getUrl) pictureUrl: Observable<string>;

  constructor() { }

  ngOnInit() {

  }

}
