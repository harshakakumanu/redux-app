/**
 * Created by harshakakumanu on 2017-01-09.
 */
import React, {PropTypes} from 'react';

class CoursesPage extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      course:{title:""}
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);


  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;

    this.setState({course:course});
  }

  onClickSave(){
  alert('cool')
  }

  render(){
    return(
      <div>
        <h1>Courses</h1>
        <h2>Add course</h2>
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
        <input type="submit" onClick={this.onClickSave} value="Save"/>
      </div>
    );
  }
}

export default CoursesPage;
