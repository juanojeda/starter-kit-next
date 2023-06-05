import { type NextPage } from "next"
import Head from "next/head"
import { api } from "~/server/api"

const Home: NextPage = () => {
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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Hello world
          </h1>
          <div className="flex h-20 flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <p className="text-2xl text-white">
              {secret.isSuccess ? secret.data : "You are unauthenticated"}
            </p>
            <p className="text-2xl text-white">
              {mutationExample.isSuccess ? mutationExample.data.greeting : ""}
            </p>
          </div>
          <button
            type="button"
            onClick={handleButton}
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold
            text-white shadow-sm hover:bg-indigo-400 focus-visible:outline
            focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-indigo-500"
          >
            Test mutate
          </button>
        </div>
      </main>
    </>
  )
}

export default Home
