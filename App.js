import React from 'react';
import { View } from "react-native";
class ReloadPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSecond: 0
    }
  }
  componentDidMount() {
    const { seconds } = this.props;
    this.countdown(seconds);
  }
  countdown(seconds) {
    if (seconds == 0) {
      window.location.reload();
    };


    // update current second state
    this.setState({ currentSecond: seconds });
    
    setTimeout(() => this.countdown(seconds - 1), 1000);
  }

  render() {
    const { currentSecond } = this.state;
    return (
      <p>
        {currentSecond}
      </p>
    );
  }
}

function App() {
  return (
    <View>
      <div>
        <ReloadPage seconds={5} />
      </div>
    </View>
  )
}
export default App;

