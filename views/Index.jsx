const React = require("react");
class Index extends React.Component {
  render() {
    const { students } = this.props;
    return (
      <div>
        <h1>Students Page</h1>
        <nav>
          <a href="/students/new">Create a New Student</a>
        </nav>
        <ul>
          {students.map((student, i) => {
            return (
              <li key={i}>
                <a href={`/students/${i}`}>{student.name}</a> has a {student.grade}{" "}
                <br></br>
                {student.enrolled
                  ? `Is enrolled`
                  : `Is not enrolled`}
                <br />
               
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
