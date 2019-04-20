import * as React from "react"

import WeekBox from "./components/WeekBox"

import "./App.css"

export interface Props {
  name: string
  diedAge?: number
  birth: string
}

interface State {
  diedAge: number
}

// Helper function
function countWeeks(d: string, diedAge: number): [number, number] {
  // return week already used and week left in a lifetime
  const birth: Date = new Date(d)
  const currentDate: Date = new Date(Date.now())

  const currentAge: number = currentDate.getFullYear() - birth.getFullYear()
  const yearsLeft: number = diedAge - currentAge

  const weeksUsed: number = Math.round((currentAge * 365) / 7)
  const weeksLeft: number = Math.round((yearsLeft * 365) / 7)

  return [weeksUsed, weeksLeft]
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      diedAge: props.diedAge || 63
    }
  }

  render() {
    const { name, diedAge, birth } = this.props

    if (this.state.diedAge <= 0) {
      throw new Error("You exists right?")
    }

    const [weeksUsed, weeksLeft] = countWeeks(birth, this.state.diedAge)

    const WeekBoxesUsed: JSX.Element[] = []
    const WeekBoxesLeft: JSX.Element[] = []

    for (let i = 0; i < weeksUsed; i++) {
      WeekBoxesUsed.push(<WeekBox key={i} box="used-week" />)
    }

    for (let i = 0; i < weeksLeft; i++) {
      WeekBoxesLeft.push(<WeekBox key={i} box="unused-week" />)
    }

    return (
      <div className="app">
        Hello {name} <br />
        You expect to die at the age of {diedAge}
        <div className="container">
          <h6>The Boxes below represent the amount of weeks in your life.</h6>
          {WeekBoxesUsed}
          {WeekBoxesLeft}
        </div>
      </div>
    )
  }
}

export default App
