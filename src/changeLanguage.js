import React from "react";

class LanguageSelectComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = ({
      toEng: props.toEng,
    })
    this.onClick = this.onClick.bind(this);
  }

  onClick(event){
    this.setState({
      toEng: !event.target.checked
    })
  }

  render(){
    return (
    <label>
      <input
            name="English"
            type="checkbox"
            onChange={this.onClick} />
      {this.state.toEng? 'English':'Chinese'}
    </label>);
  }
}

export default LanguageSelectComponent;