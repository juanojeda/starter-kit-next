// This component comes from an open PR in the shadcn/ui repo. 

import { type NextPage } from "next"
import Head from "next/head"
import { api } from "~/server/api"
import { useSession } from "next-auth/react"
import { Button, buttonVariants } from "~/components/ui/button"
import Link from "next/link"

type DBSummaryData = {
  userCount: number;
  authorCount: number;
  postCount: number;
}

const formatDbSummaryData = ({ userCount, postCount, authorCount }: DBSummaryData) => `There are ${userCount} users, ${authorCount} authors and ${postCount} posts.`;

const Home: NextPage = () => {
  const { data: sessionData } = useSession()
  const dbSummary = api.queryExample.useQuery({ text: "from tRPC" })
  const secret = api.protectedExample.useQuery()
  const mutationExample = api.mutationExample.useMutation()
  const googleAuthConfigured: boolean = dbSummary.data ? dbSummary.data.googleAuthenticationConfigured : false;

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
              {dbSummary.data ? formatDbSummaryData(dbSummary.data) : "Loading tRPC query..."}
            </p>
            <p>
              {secret.isSuccess ? secret.data : ""}
            </p>
            <p>
              {sessionData?.user
                ? `Welcome ${sessionData.user.name} (${sessionData.user.email})`
                : "You are unauthenticated"}
            </p>
            <div className="flex flex-row items-stretch justify-start w-full">
              <Button className={buttonVariants({ variant: "secondary" })
              } onClick={handleMutateButton}>Test mutate</Button>
              <div>
                {mutationExample.isSuccess ? mutationExample.data.greeting : ""}
              </div>
            </div>
            {googleAuthConfigured ?
              (
                sessionData?.user ?
                  // Example of styling a non-button element as a button. Using the asChild property will pass the button styles onto the child element
                  // see https://www.radix-ui.com/primitives/docs/utilities/slot#usage
                  <Button asChild  >
                    <Link href="/api/auth/signout">Sign out</Link>
                  </Button>
                  :
                  <Button asChild >
                    <Link href="/api/auth/signin">Sign in with Google</Link>
                  </Button>
              )
              : (
                <p>Google Authentication is not correctly configured.  Please check your .env file.</p>
              )
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
