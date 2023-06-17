import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Index = () => {
  const [name, setName] = useState("")
  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search)
    setName(searchParams.get("name"))
  }, [])
  return (
    <Layout>
      <main className="mt-28 md:mt-32 xl:mt-40">
        <div className="flex flex-col items-center max-w-xs xl:max-w-sm mx-auto">
          <div className="min-h-[calc(100vh-16rem)] md:min-h-[calc(100vh-11rem)] min-w-full bg-center bg-no-repeat bg-cover paymentImage">
            <div className="hero-text flex flex-col justify-center items-center text-secondary-color ">
              <div className="text-2xl xl:text-4xl font-serif text-center mt-6">
                Thank you {name}, our team will reach out to you shortly!
              </div>

              <div className="text-center text-sm xl:text-base mt-2 xl:mt-6">
                Please feel free to{" "}
                <a
                  href="mailto:greeceeventspc@gmail.com"
                  aria-label="Gmail"
                  rel="noreferrer"
                  className="underline"
                >
                  contact us
                </a>{" "}
                with any questions or concerns.
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Index

export const Head = () => (
  <>
    <Seo description='Create lasting memories with Greece Weddings, Photos & Events, your premier wedding, event, and photography specialists. From dream weddings to unforgettable celebrations, we bring your vision to life. Our talented team captures every moment with precision and artistry. Trust us to make your moments truly unforgettable.'/>
  </>
)
