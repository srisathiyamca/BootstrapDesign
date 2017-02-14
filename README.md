# BootstrapDesign

var mainContainer = document.getElementById('container');
var headerPannel = document.getElementById('headerMenu');
var { Router, Route, IndexRoute, hashHistory, IndexLink, Link, browserHistory } = ReactRouter


class ManageRole extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event)
   {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) 
  {
   
    event.preventDefault();
  }

  render() 
  {
    return (

     <form >
   <h3>Existing Roles:</h3>
 <table className="table">
  <thead>
    <tr>

      <th>RoleName</th>
      <th># No Of Logins In Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td><a href="#/Admin">Admin</a></td>
      <td>1</td>
    
    </tr>
    <tr>
    
      <td><a href="#/ReportsUser">Reports User</a></td>
      <td>3</td>
      
    </tr>
    <tr>
 
      <td><a href="#/Api">API Only</a></td>
      <td>1</td>

    </tr>
  </tbody>
</table>
   <ul>
  <a href="#/createNewUser">Click Here To Create NewRole</a>
  </ul>
      </form>
     

  
    );
  }
}


class AdminEditRole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {apiAccess:'',
    portalLogin:'',
    userManagement:'',
    licenseManagement:'',
    reports:'',
    dashboard:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout=this.handleLogout.bind(this);
    this.onchange=this.onchange.bind(this);
  {
  window.location="#/ManageRole"
  }
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    
  }
onchange(e){
	
	this.setState({apiAccess: e.target.checked});
	this.setState({portalLogin:e.target.checked});
	this.setState({userManagement:e.target.checked});
	this.setState({licenseManagement:e.target.checked});
	this.setState({reports:e.target.checked});
	this.setState({dashboard:e.target.checked});
}
  handleSubmit(event) {
   
    event.preventDefault();
  }
  handleLogout()
  {
  window.location="#/"
  }

  render() {
    return (<form  onSubmit={this.handleSubmit}>
     <style>{`
    table{
     border:1px solid black;
    }
   
  `}</style>
  <h3> Edit Roles</h3>
 <ul>
  <label>Role Name
  <input type="text" />
  </label> 
</ul>
<ul>
 <div className="form-group">
 <label>
<input type="checkbox"  name="portalLogin" value={this.state.portalLogin} onChange={this.onchange}/>Portal Login
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="apiAccess"	value={this.state.apiAccess} onChange={this.onchange}/>API Access
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="userManagement" value={this.state.userManagement} onChange={this.onchange}/>User Management
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="licenseManagement" value={this.state.licenseManagement} onChange={this.onchange}/>License Management
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="reports" value={this.state.reports} onChange={this.onchange}/>Reports
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="dashboard" value={this.state.dashboard} onChange={this.onchange}/>Dashboard
</label>
</div>

</ul>
<input type="submit" value="save"  disabled={!this.state.apiAccess || !this.state.portalLogin || !this.state.userManagement || !this.state.licenseManagement || !this.state.reports || !this.state.dashboard} />
<input type="submit" value="cancel" onClick={this.handleLogout}  />
 
      </form>
    );
  }
}
class ReportUserEditRole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {apiAccess:'',
    portalLogin:'',
    userManagement:'',
    licenseManagement:'',
    reports:'',
    dashboard:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout=this.handleLogout.bind(this);
	this.onchange=this.onchange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
   
    event.preventDefault();
  }
handleLogout()
  {
  window.location="#/"
  }
  onchange(e){
	
	this.setState({apiAccess: e.target.checked});
	this.setState({portalLogin:e.target.checked});
	this.setState({userManagement:e.target.checked});
	this.setState({licenseManagement:e.target.checked});
	this.setState({reports:e.target.checked});
	this.setState({dashboard:e.target.checked});
}

  render() {
    return (<form  onSubmit={this.handleSubmit}>
    
  <h3> Edit Roles</h3>
 <ul>
  <label>Role Name
  <input type="text" />
  </label>
</ul>
<ul>
 <div className="form-group">
 <label>
<input type="checkbox"  name="portalLogin" value={this.state.portalLogin} onChange={this.onchange}/>Portal Login
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="apiAccess"	value={this.state.apiAccess} onChange={this.onchange}/>API Access
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="userManagement" value={this.state.userManagement} onChange={this.onchange}/>User Management
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="licenseManagement" value={this.state.licenseManagement} onChange={this.onchange}/>License Management
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="reports" value={this.state.reports} onChange={this.onchange}/>Reports
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="dashboard" value={this.state.dashboard} onChange={this.onchange}/>Dashboard
</label>
</div>

</ul>
<input type="submit" value="save"  disabled={!this.state.apiAccess || !this.state.portalLogin || !this.state.userManagement || !this.state.licenseManagement || !this.state.reports || !this.state.dashboard} />
<input type="submit" value="cancel" onClick={this.handleLogout}  />
      </form>
    );
  }
}
class ApiOnlyEditRole extends React.Component {
  constructor(props) {
    super(props);
      this.state = {apiAccess:'',
    portalLogin:'',
    userManagement:'',
    licenseManagement:'',
    reports:'',
    dashboard:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout=this.handleLogout.bind(this);
	this.onchange=this.onchange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
   
    event.preventDefault();
  }
  handleLogout()
  {
  window.location="#/"
  }
  onchange(e){
	
	this.setState({apiAccess: e.target.checked});
	this.setState({portalLogin:e.target.checked});
	this.setState({userManagement:e.target.checked});
	this.setState({licenseManagement:e.target.checked});
	this.setState({reports:e.target.checked});
	this.setState({dashboard:e.target.checked});
}
  

  render() {
    return (<form  onSubmit={this.handleSubmit}>
    
  <h3> Edit Roles</h3>
 <ul>
  <label>Role Name
  <input type="text" />
  </label>
</ul>
<ul>
 <div className="form-group">
 <label>
<input type="checkbox"  name="portalLogin" value={this.state.portalLogin} onChange={this.onchange}/>Portal Login
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="apiAccess"	value={this.state.apiAccess} onChange={this.onchange}/>API Access
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="userManagement" value={this.state.userManagement} onChange={this.onchange}/>User Management
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="licenseManagement" value={this.state.licenseManagement} onChange={this.onchange}/>License Management
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="reports" value={this.state.reports} onChange={this.onchange}/>Reports
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="dashboard" value={this.state.dashboard} onChange={this.onchange}/>Dashboard
</label>
</div>

</ul>
<input type="submit" value="save"  disabled={!this.state.apiAccess || !this.state.portalLogin || !this.state.userManagement || !this.state.licenseManagement || !this.state.reports || !this.state.dashboard} />
<input type="submit" value="cancel" onClick={this.handleLogout}  />
      </form>
    );
  }
}
class CreateRole extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout=this.handleLogout.bind(this);
	this.onchange=this.onchange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
   
    event.preventDefault();
  }
 handleLogout()
  {
  window.location="#/"
  }
  onchange(e){
	
	this.setState({apiAccess: e.target.checked});
	this.setState({portalLogin:e.target.checked});
	this.setState({userManagement:e.target.checked});
	this.setState({licenseManagement:e.target.checked});
	this.setState({reports:e.target.checked});
	this.setState({dashboard:e.target.checked});
}
  render() {
    return (<form  onSubmit={this.handleSubmit}>
    
  <h3>Add Roles</h3>
<ul>
  <label>New Role Name
  <input type="text"/>
  </label>
</ul>
<ul>
 <div className="form-group">
 <label>
<input type="checkbox"  name="portalLogin" value={this.state.portalLogin} onChange={this.onchange}/>Portal Login
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="apiAccess"	value={this.state.apiAccess} onChange={this.onchange}/>API Access
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="userManagement" value={this.state.userManagement} onChange={this.onchange}/>User Management
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="licenseManagement" value={this.state.licenseManagement} onChange={this.onchange}/>License Management
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="reports" value={this.state.reports} onChange={this.onchange}/>Reports
</label>
</div>
<div className="form-group">
<label>
<input type="checkbox" name="dashboard" value={this.state.dashboard} onChange={this.onchange}/>Dashboard
</label>
</div>

</ul>
<input type="submit" value="save"  disabled={!this.state.apiAccess || !this.state.portalLogin || !this.state.userManagement || !this.state.licenseManagement || !this.state.reports || !this.state.dashboard} />
<input type="submit" value="cancel" onClick={this.handleLogout}  />
 
      </form>
    );
  }
}

ReactDOM.render((
	<Router history={hashHistory}>		
		<Route path = "/" component = {ManageRole} />
		
		<Route path="/Admin" component={AdminEditRole}/>
		<Route path="/ReportsUser" component={ReportUserEditRole}/>
		<Route path="/Api" component={ApiOnlyEditRole}/>
		<Route path="/createNewUser" component={CreateRole}/>
		
	</Router>
), mainContainer);

