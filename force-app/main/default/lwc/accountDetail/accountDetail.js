import { LightningElement,track,api } from 'lwc';


export default class AccountDetail extends LightningElement {
    @api accountDetailPage = false;
    name='';
    dateOfBirth = null;
    _dob = null;
    street
    city
    postalCode
    state
    country
    date=new Date("2020-01-01");
    @track bool = true;
    
    handleNameInput(event) {
        this.name = event.target.value;
    }
    
    handleDateInput(event){
        this.dateOfBirth = event.target.value;
        this._dob = new Date(this.dateOfBirth);
        console.log("date",this.dateOfBirth);
    }

    handleAddressInput(event){
        this.street  = event.target.value;
    }

    handleCityInput(event){
        this.city = event.target.value;
    }

    handlePostalCodeInput(event){
        this.postalCode = event.target.value;
    }

    handleCountryInput(event){
        this.country = event.target.value;
    }

    handleStateInput(event){
        this.state = event.target.value;
    }

    handleNextClick(){
        var isNameValid = false;
        var isDateValid = false;
        var isDateLess = false;
        // if(){
        //     console.log('New Date Check Workd111', new Date(this.date).getTime() < new Date(this.dateOfBirth).getTime());
        //     var validation = this.template.querySelector('.date');
        //     validation.setCustomValidity('set correct date ');
        //     validation.reportValidity(); 
        //     console.log('close1111');
        // }
        // else{
        //     var nameValidation = this.template.querySelector('.date');
        //     nameValidation.setCustomValidity('');
        //     nameValidation.reportValidity(); 
        //     isDateLess=true;
        // }

        if(this.name === ''){
            var nameValidation = this.template.querySelector('.name');
            nameValidation.setCustomValidity('Please enter your name to proceed');
            nameValidation.reportValidity(); 
            
        }
        else{
            var nameValidation = this.template.querySelector('.name');
            nameValidation.setCustomValidity('');
            nameValidation.reportValidity(); 
            isNameValid=true;
        }

        if(!this._dob) {
            var validation = this.template.querySelector('.date');
            console.log(validation);
            validation.setCustomValidity('Date cannot be empty');
            validation.reportValidity(); 
        }
        else{
            var nameValidation = this.template.querySelector('.date');
            nameValidation.setCustomValidity('');
            nameValidation.reportValidity(); 
            isDateValid=true;
        }
        
        if(new Date(this.date).getTime() > new Date(this.dateOfBirth).getTime()){
            
            // console.log('New Date Check Workd', new Date(this.date).getTime() < new Date(this.dateOfBirth).getTime());
            // var validation = this.template.querySelector('.date');
            // console.log(validation);
            // validation.setCustomValidity('Date cannot be empty or less than 1 january 2020');
            // validation.reportValidity(); 
            // console.log("hello date", this.date, " ", this.dateOfBirth);
            isDateLess = true;  
        }
        else{
            var validation = this.template.querySelector('.date');
            console.log(validation);
            validation.setCustomValidity('Date cannot be greater than 1 january 2020');
            validation.reportValidity(); 


            // console.log("DOB else statement");
            // console.log("hello date", " ", new Date(this.dateOfBirth));
            // console.log("com1 ", new Date(this.date) >  new Date(this.dateOfBirth)); // false
            // console.log("com2 ", new Date(this.date) <  new Date(this.dateOfBirth)); // true
            // console.log("com2 ", new Date(this.date).getTime() <  new Date(this.dateOfBirth).getTime()); // true
            // console.log("com3 ", this.date <  this.dateOfBirth); // true
            // console.log(this.date < new Date(this.dateOfBirth)); // true
            
            // var validation = this.template.querySelector('.date');
            // validation.setCustomValidity('');
            // validation.reportValidity();  
            // isDateValid = true;  
        }
        // // if(this.dateOfBirth>this.date){
        //     this.temp=false;
        //     console.log("hello less than");
        //     var validation = this.template.querySelector('.date');
        //     validation.setCustomValidity('Date cannot be greater than 1 january 2020');
        //     validation.reportValidity(); 
        // }
        // else{
        //     this.temp=true;
        //     var validation = this.template.querySelector('.date');
        //     validation.setCustomValidity('');
        //     validation.reportValidity();   
        // }
        if(isNameValid == true && isDateValid == true && isDateLess == true){
            this.accountDetailPage = false;
            this.taskPage = true;
            this.bool = false;
        }
        else{
        }
    }
    handleChildData(event){
        console.log("Event",JSON.stringify(event.detail));
        if(event.detail==="ok"){
            this.bool=true;
            this.taskPage = false;
            this.name='';
            this.dateOfBirth='';
            this.street='';
            this.city='';
            this.postalCode='';
            this.state='';
            this.country='';
        }
        if(event.detail==="previous"){
            this.bool=true;
            this.taskPage = false;
        }
        
    }
}
