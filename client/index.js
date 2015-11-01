var StatusCard = React.createClass({
  loadStatusFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadStatusFromServer();
    setInterval(this.loadStatusFromServer, this.props.pollInterval); 
  },
  render: function() {
    return (
      <div className="statusCard">
        <h1>Current apartment status</h1>
        <TempView data={this.state.data} />
        <HumidityView data={this.state.data} />
      </div>
    );
  }
});

var TempView = React.createClass({
  render: function() {
    var temperature = this.props.data.temperature;
    return (
      <div className="tempView">
        Current temperature is: {temperature} C
      </div>
    );
  }
});

var HumidityView = React.createClass({
  render: function() {
    var humidity = this.props.data.humidity
    return (
      <div className="humidityView">
        Current humidity is {humidity} %RH
      </div>
    );
  }
});

ReactDOM.render(
  <StatusCard url="/api" pollInterval={2000} />,
  document.getElementById('content')
);