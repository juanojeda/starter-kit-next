import { type NextPage } from "next"
import Head from "next/head"
import { api } from "~/server/api"
import { useSession } from "next-auth/react"
import { Button } from "~/components/ui/button"
import Typography from "~/components/ui/typography"

const Home: NextPage = () => {
  const { data: sessionData } = useSession()
  const hello = api.queryExample.useQuery({ text: "from tRPC" })
  const secret = api.protectedExample.useQuery()
  const mutationExample = api.mutationExample.useMutation()

  const handleButton = () => {
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
          <Typography element="h1" as="h1">
            Hello world
          </Typography>
          <div className="flex h-20 flex-col items-center gap-2">
            <Typography as="p" element="p">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </Typography>
            <Typography as="p" element="p">
              {secret.isSuccess ? secret.data : ""}
            </Typography>
            <Typography as="p" element="p">
              {sessionData?.user
                ? `Welcome ${sessionData.user.id}`
                : "You are unauthenticated"}
            </Typography>
            <Typography as="p" element="p">
              {mutationExample.isSuccess ? mutationExample.data.greeting : ""}
            </Typography>
          </div>
          <Button onClick={handleButton}>Test mutate</Button>
        </div>
      </main>
    </>
  )
}

export default Home
