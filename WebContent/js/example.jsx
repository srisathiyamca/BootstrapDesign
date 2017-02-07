
var ContactForm = React.createClass({
  propTypes: {
    //value: React.PropTypes.object.isRequired,
    //onChange: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
  },

  render: function() {
    //var oldContact = this.props.value;
    //var onChange = this.props.onChange;
    
    return (
      React.createElement('form', {className: 'ContactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Name (required)',
          value: this.props.name,
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          value: this.props.email,
        }),
        React.createElement('textarea', {
          placeholder: 'Description',
          value: this.props.description,
        }),
        React.createElement('button', {type: 'submit'}, "Add Contact")
      )
    );
  },
});

ReactDOM.render(
	React.createElement(ContactForm,{name: "sathiya",email: "srisathia01@gmail.com",description: "welcome",}),
	document.getElementById('aspEnquiry')
	);

