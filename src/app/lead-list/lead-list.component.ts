import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { Lead } from '../_interface/lead.model';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.scss']
})
export class LeadListComponent implements OnInit {

  @Input() leads: [];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  leadsList: Lead[] = [];

  public dataSource: any; 

  displayedColumns: string[] = ['customer_name', 'source', 'status', 'sales_person'];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.fetchLeads();
  }

  fetchLeads() {

    if (this.leads && this.leads.length) {

      this.leads.map(leadId => {

        this.accountService.getData(`leads/${leadId}/`).subscribe(lead => {
            this.leadsList.push(lead as Lead);
            this.setDataSource(this.leadsList);
        });
     })

    }
    
  }

  setDataSource(data) {

    this.dataSource = new MatTableDataSource(data as Account[]);
    this.dataSource.sort = this.sort;
  }

}
