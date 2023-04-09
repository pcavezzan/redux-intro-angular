import {FunctionComponent} from "react";

export const Header: FunctionComponent<{ messageCount: number }> = ({messageCount}) => {
  return (
    <p>
      Vous avez {messageCount} messages
    </p>
  )
}
