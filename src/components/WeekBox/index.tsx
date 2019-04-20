import * as React from "react"

import "./WeekBox.css"

export interface Props {
  box: string
}

function WeekBox({ box }: Props) {
  return <div className={box} />
}

export default WeekBox
