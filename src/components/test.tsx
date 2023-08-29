import React, { PropsWithChildren } from "react";

type UserInfo = {
  name?: string,
  emailAddress?: string,
}

const AuthenticationInfo = ({ name, emailAddress }: UserInfo) => {
  if (name) {
    return (
      <p>Welcome {name} ({emailAddress})</p>
    )
  } else {
    return (
      <p>You are unauthenticated</p>
    )
  }
}

const AuthenticationInfo2 = ({ name, emailAddress }: UserInfo): JSX.Element =>
  name ? (
    <p>Welcome {name} ({emailAddress})</p>
  ) : (
    <p>You are unauthenticated</p>
  )