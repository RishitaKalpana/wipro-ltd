import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  s:string | any;
  users:any;

  Account:any=[];
  employeeId:number=0;

  constructor(private data:DataService) { 

  }

  ngOnInit(): void {
    this.s=this.data.helloService();

    this.data.getUsers().subscribe(data =>{
      this.users=data
      console.log(this.users);

    }
    );
  }

  getAccounts()
  {
    return this.data.getAccounts(this.employeeId).subscribe((d: {}) => {
      this.Account=d;
  })
}
}
