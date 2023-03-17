import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  data:any = []
  constructor(
    public services:ServicesService
  ) { 

    this.services.getCatalogo().subscribe(resp=>{
      this.data = resp
    })
  }

  ngOnInit(): void {
  }

}
