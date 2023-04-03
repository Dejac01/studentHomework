const React = require('react')


class New extends React.Component {
    render(){
      return (
          <div>
              <h1>Student Grades</h1>
             
              <form action="/students" method="POST">
                Name: <input type="text" name="name" /><br/>
                <input type="submit" name="" value="Create Student"/>
      
              </form>
          </div>);
      }
    }
  
  module.exports = New;