import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import CustomerDTO from '../../dto/CustomerDTO';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.scss']
})
export class CustomerPageComponent implements OnInit {

  constructor(private customerService: CustomerService) {
  }

  customerName = '';
  customerAddress = '';
  customerSalary = 0;

  ngOnInit(): void {
  }

  saveCustomer() {

    const dto = new CustomerDTO(
      this.customerName.trim(),
      this.customerAddress.trim(),
      Number(this.customerSalary),
      'no-image',
      []
    );

    this.customerService.saveCustomer(dto).subscribe(resp => {
      alert(resp.message);
    }, error => {
      console.log(error);
    });
  }

}
