var aspEnquiry=document.getElementById('aspEnquiry');

class EnquiryForm extends React.Component{
	constructor(props){
		super(props);
		this.state={aspName: '',
		noofClients: '',
		contactName: '',
		phoneno: '',
		emailID: '',
		panno: '',
		turnover:''};	
					
		
		this.handleEnquiryChange=this.handleEnquiryChange.bind(this);
		this.handleAspEnquiry=this.handleAspEnquiry.bind(this);
		this.test=this.test.bind(this);
		this.validateSpecialCharacter=this.validateSpecialCharacter.bind(this);
		this.validateEmail=this.validateEmail.bind(this);
		this.validatePanno=this.validatePanno.bind(this);
	}
	
	//to validate email
	validateEmail(e) {
    
    var emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailPattern.test(e.target.value)){
    		alert('Enter Valid Mail ID');
			this.setState({[e.target.id]:''});
	
    }
  }
	
	//to validate special character
	validateSpecialCharacter(e){
			var specialCharPattern=/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
			
		if(specialCharPattern.test(e.target.value)){
			alert('Special Characters Not Allowed');
			this.setState({[e.target.id]:''});
			
		}
	} 
	
	//to validate the panno
	validatePanno(e){
	var pannoPattern=/[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
		if(!pannoPattern.test(e.target.value)){
			alert('Kindly Enter Valid PAN No');
			this.setState({[e.target.id]:''});
			
		}
	}
		
	
	handleEnquiryChange(e){
		this.setState({[e.target.id]:e.target.value});
	}
	handleAspEnquiry(e){
		//e.preventDefault();
		alert('A name was submitted: '+this.state.aspName);
		alert('welcome');
			
	}


	//to test ajax call
	test(e){
		axios.get("http://codepen.io/jobs.json")
  		.then(function(result) {    
    	console.log(result);
  		});
	
  }
	
	
	
	render(){
		return(
			<form onSubmit={this.handleAspEnquiry}>
			
			<h1>ASP Enquiry Form</h1>
			<input type="text" id="aspName" placeholder="ASP Name" value={this.state.aspName} onChange={this.handleEnquiryChange} minCharacters={6} errorMessage="ASP Name is invalid" emptyMessage="ASP Name is required" onBlur={this.validateSpecialCharacter} required/>
			
			<input type="number" id="noofClients" placeholder="No Of clients" value={this.state.noofClients} onChange={this.handleEnquiryChange} errorMessage="Expected No of Clients is invalid" emptyMessage="Expected No of Clients is required" onBlur={this.validateSpecialCharacter} required/>
			
			<input type="text" id="contactName" placeholder="Contact Name" value={this.state.contactName} onChange={this.handleEnquiryChange} onBlur={this.validateSpecialCharacter} required/>
			
			<input type="text" id="phoneno" placeholder="Phone No" value={this.state.phoneno} onChange={this.handleEnquiryChange} onBlur={this.validateSpecialCharacter} required/>
			
			<input type="text" id="emailID" placeholder="Email ID" value={this.state.emailID}  onChange={this.handleEnquiryChange} onBlur={this.validateEmail} required/>
			
			<input type="text" id="panno" placeholder="PAN No" value={this.state.panno} onChange={this.handleEnquiryChange} onBlur={this.validatePanno} required/>
			
			<input type="number" id="turnover" placeholder="Turnover" value={this.state.turnover} onChange={this.handleEnquiryChange} onBlur={this.validateSpecialCharacter} required/>
			
			<input type="submit" value="click Me!" />
			
			</form>

		);
	}
}
ReactDOM.render(
 <ReactRouter.Router>
    <ReactRouter.Route path="/" component={EnquiryForm}>
 
    </ReactRouter.Route>
  </ReactRouter.Router>,
  aspEnquiry
)