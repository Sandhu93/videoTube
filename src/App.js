const Video = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.title),
    React.createElement("h3", {}, props.dateAdded),
    React.createElement("h4", {}, props.channel),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Video Tube"),
    React.createElement(Video, {
      title: "The best video on youtube",
      dateAdded: "4 days Ago",
      channel: "News Channel",
    }),
    React.createElement(Video, {
      title: "The fun video on youtube",
      dateAdded: "3 days Ago",
      channel: "Fun Channel",
    }),
    React.createElement(Video, {
      title: "The most viral video on youtube",
      dateAdded: "2 days Ago",
      channel: "Viral Channel",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
