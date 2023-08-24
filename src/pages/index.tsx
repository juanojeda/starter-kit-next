// This component comes from an open PR in the shadcn/ui repo. 

import { type NextPage } from "next"
import Head from "next/head"
import { api } from "~/server/api"
import { useSession } from "next-auth/react"
import { Button, buttonVariants } from "~/components/ui/button"

const Home: NextPage = () => {
  const { data: sessionData } = useSession()
  const hello = api.queryExample.useQuery({ text: "from tRPC" })
  const secret = api.protectedExample.useQuery()
  const mutationExample = api.mutationExample.useMutation()

  const handleMutateButton = () => {
    mutationExample.mutate({ text: "mutate from tRPC" })
  }

  return (
    <>
      <Head>
        <title>Next template</title>
        <meta name="description" content="Next Template app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1>
            Hello world
          </h1>
          <div className="flex h-20 flex-col items-center gap-2">
            <p>
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <p>
              {secret.isSuccess ? secret.data : ""}
            </p>
            <p>
              {sessionData?.user
                ? `Welcome ${sessionData.user.name} (${sessionData.user.email})`
                : "You are unauthenticated"}
            </p>
            <p>
              {mutationExample.isSuccess ? mutationExample.data.greeting : ""}
            </p>
          </div>
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <Button className={buttonVariants({variant: "secondary"})
            } onClick={handleMutateButton}>Test mutate</Button>
          </div>
          {
                    sessionData?.user ?
                      <Button asChild className={buttonVariants({variant: "secondary"})} >
                        <a href="/api/auth/signout">Sign out</a>
                      </Button>
                  : 
                    <Button asChild className={buttonVariants({variant: "secondary"})} >
                      <a href="/api/auth/signin">Sign in with Google</a>
                    </Button>
          }
        </div>
      </main>
    </>
  )
}

export default Home
