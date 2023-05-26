import React from "react"
import { UserContext, ChannelContext } from "../App"

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {
            user => {
              return (
                <ChannelContext.Consumer>
                  {
                    channel => {
                      return (
                        <div>
                          <h2>User context value: {user}</h2>
                          <h2>Channel context value: {channel}</h2>
                        </div>
                      )
                    }
                  }
                </ChannelContext.Consumer>
              )
            }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
