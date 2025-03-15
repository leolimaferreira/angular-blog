import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {dataFake} from '../data/dataFake';
import {identity} from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
  standalone: false
})
export class ContentComponent implements OnInit{

  @Input()
  photoCover:string = "";
  @Input()
  contentTitle:string = "";
  @Input()
  contentDescription:string = "";
  private id:string | null= "0";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article =>
                                                  article.id === id)[0];

    this.photoCover = result.photoCover;
    this.contentTitle = result.title;
    this.contentDescription = result.description;

  }
}
