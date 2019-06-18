const template = React.createElement(
  "h1",
  { id: "someid" },
  "Something New"
);
const appRoot = document.getElementById('id')

ReactDOM.render(template, appRoot);