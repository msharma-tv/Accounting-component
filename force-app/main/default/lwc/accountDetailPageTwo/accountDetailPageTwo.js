import { LightningElement ,api,track} from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountDetailPageTwo extends LightningElement {
    @api taskPage = false;
    @track isModalOpen=false;
    @track bool = true;
    nameOfBank='';
    branchName='';
    code='';

    @api name;
    @api dateOfBirth;
    @api street;
    @api city;
    @api postalCode;
    @api state;
    @api country;

    handleBankInput(event){
        this.nameOfBank = event.target.value;
    }

    handleBranchName(event){
        this.branchName = event.target.value;
    }

    handleCodeInput(event){
        this.code = event.target.value;
    }
    
    handlePreviousClick(){
        const event = new CustomEvent('senddata',{detail:"previous"});
        this.dispatchEvent(event);
    }
    
    handleResetClick(){
        this.isModalOpen=true;
    }
    
    closeModal(){
        this.isModalOpen=false;
    }
    
    handleOk(){
        const event = new CustomEvent('senddata',{detail:"ok"});
        this.dispatchEvent(event);
    }

    handleSubmitClick(){
        if(this.nameOfBank == ''){
             var nameValidation = this.template.querySelector('.bankName');
             nameValidation.setCustomValidity('Please Fill The Field');
             nameValidation.reportValidity();    
        }
        else{
            const fields = {
                'Name' : this.name,
                'Date_Of_Birth__c': this.dateOfBirth,
                'City__c': this.city,
                'Country_name__c':this.country,
                'Postal_Code__c':this.postalCode,
                'State__c':this.state,
                'Code__c':this.code,
                'Bank_Name__c':this.nameOfBank,
                'Branch_Name__c':this.branchName,
                'Street__c':this.street
            };
            const recordInput = { apiName: 'Bank_Customer__c', fields };
            createRecord(recordInput);
            const event = new ShowToastEvent({
                title: 'Success!',
                message: 'Record created! Successfully',
                variant:'success'
            });
            this.dispatchEvent(event);
            this.lastPage=true;
            this.bool=false;
        }
    }
}