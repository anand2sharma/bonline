import {Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {PageEvent} from '@angular/material/paginator';

import { AccountService } from '../shared/account.service';
import { Account } from '../_interface/account.model';


/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'account-list',
  styleUrls: ['account-list.component.scss'],
  templateUrl: 'account-list.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AccountListComponent implements OnInit {
 
  columnsToDisplay = ['business_name','first_name','email_address','bank_acc_no','address_country'];
  columnsNames = {'business_name': 'Business', 'first_name': 'Name', 'email_address': 'Email', 
                  'bank_acc_no': 'Account','address_country': 'Address'};
  expandedAccount: Account | null;

  public dataSource: any; 
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private accountService: AccountService) { }

  ngOnInit() {

    this.getAccounts();
  }

  public filterAccount = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  getAccounts() {

    this.accountService.getData('accounts/').subscribe(res => {
      
      this.setDataSource(res);
     
    });
  }

  getNext(event: PageEvent) {
   
    this.accountService.getData(`accounts/?page=${event.pageIndex + 1}`).subscribe(res => {

      this.dataSource = [...this.dataSource.data, ...res as Account[]];

      this.setDataSource(this.dataSource);
     
    });

  }

  setDataSource(data) {

    this.dataSource = new MatTableDataSource(data as Account[]);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}