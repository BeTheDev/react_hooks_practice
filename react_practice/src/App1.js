import React, { Component } from "react"
import ScrollBox from "./classStuff/ScrollBox"

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>To Bottom</button>
      </div>
    )
  }
}

export default App
