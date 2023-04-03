const React = require("react");
class Show extends React.Component {
  render() {
    const student = this.props.student;
    const idx = this.props.idx;
    console.log(student);
    return (
      <div>
        <h1> Show Page </h1>
        {student.name} has {student.grade}
        <ul>
          {student.grades.map((grade, i) => {
            return (
              <li key={i}>
                has a {grade} <br></br>
                <br />
              </li>
            );
          })}
        </ul>
        <form action={'/students/'+idx} method="POST">
          Grade: <input type="text" name="grade" />
          <br />
          <input type="submit" name="" value="Create Student Grade" />
        </form>
        <br />
        {student.enrolled ? "Is enrolled" : "Is not enrolled"}
      </div>
    );
  }
}
module.exports = Show;
