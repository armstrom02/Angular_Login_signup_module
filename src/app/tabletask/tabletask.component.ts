import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'app-tabletask',
  templateUrl: './tabletask.component.html',
  styleUrls: ['./tabletask.component.css']
})
export class TabletaskComponent implements OnInit {
  
  source: LocalDataSource;

  constructor() {
    this.source = new LocalDataSource(this.data);
   }

  selectedlist: any[] = [
    { "firstname": "swati", "lastname": "sharma", "profession": "plumber" },
    { "firstname": "saher", "lastname": "shawkat", "profession": "engineer" },
    { "firstname": "suyash", "lastname": "pal", "profession": "manager" },
  ];
  Availablelist: any[] = [
    { "firstname": "vivek", "lastname": "singh", "profession": "engineer" },
    { "firstname": "ankit", "lastname": "sharma", "profession": "sales" },
    { "firstname": "vikas", "lastname": "kumar", "profession": "lead" },
    { "firstname": "yamini", "lastname": "singh", "profession": "doctor" },];


  ngOnInit() {
  }

  deletefxn(i, item) {
    
    this.Availablelist.push({ "firstname": item.firstname, "lastname": item.lastname, "profession": item.profession })
    this.selectedlist.splice(i, 1);


  }

  selectfxn(i, item) {

    this.selectedlist.push({ "firstname": item.firstname, "lastname": item.lastname, "profession": item.profession })
    this.Availablelist.splice(i, 1);

  }


  onSort(k) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.getElementsByTagName("TR");
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[k];
        y = rows[i + 1].getElementsByTagName("TD")[k];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }

  }


  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'Firstname',
        search: query
      },
      {
        field: 'Lastname',
        search: query
      },
      {
        field: 'profession',
        search: query
      }
    ], false); 
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }
  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      name: {
        title: 'Firstname',
        filter: false
      },
      username: {
        title: 'Lastname',
        filter: false
      },
      email: {
        title: 'proffesion',
        filter: false
      }
    }
  };

  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },
    
    
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];




}
