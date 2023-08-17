import { LightningElement,track,api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import accountingLogo from '@salesforce/resourceUrl/logoAccounting';

export default class AccountDetail extends LightningElement {
    @api taskPage = false;
    @track mainHeading=true;
    logo = accountingLogo;

    handleProceedClick(){
        this.mainHeading = false;
        this.accountDetailPage = true;
    }
}