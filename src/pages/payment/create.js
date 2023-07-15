import React from "react"
import InfoInputs from "../../components/PaymentComponents/InfoInputs"
import Layout from "../../components/layout"
import AmountInputs from "../../components/PaymentComponents/AmountInputs"
import Seo from "../../components/seo"

const Create = () => {
  return (
    <Layout>
      <main className="">
        <form
          name="payment"
          method="GET"
          action="/payment/"
          id="payment"
          className="w-64 md:w-full max-w-md flex flex-col justify-center items-center mx-auto my-5"
        >
          <>
            <InfoInputs />
          </>

          <>
            <AmountInputs />
          </>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </main>
    </Layout>
  )
}

export default Create

export const Head = () => (
  <>
    <Seo description="Create lasting memories with Greece Weddings, Photos & Events, your premier wedding, event, and photography specialists. From dream weddings to unforgettable celebrations, we bring your vision to life. Our talented team captures every moment with precision and artistry. Trust us to make your moments truly unforgettable." />
  </>
)
