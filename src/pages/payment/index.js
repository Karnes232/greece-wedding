import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import CustomPayPal from "../../components/PayPalButtonWrapper/CustomPayPal"

const Index = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [deposit, setDeposit] = useState("")
  const [balance, setBalance] = useState("")

  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search)
    setName(searchParams.get("name"))
    setEmail(searchParams.get("email"))
    setDeposit(searchParams.get("deposit"))
    setBalance(searchParams.get("balance"))
  }, [])
  const totalPrice = parseFloat(balance) + parseFloat(deposit)
  return (
    <Layout>
      <main className="mt-28 md:mt-32 xl:mt-40">

            <div className="min-h-screen min-w-full bg-center bg-no-repeat bg-cover">
              <div className=" mx-auto flex flex-col justify-center items-center text-secondary-color w-11/12 md:w-9/12 lg:w-6/12 xl:w-4/12 md:text-lg">
                {name && (
                  <p className="text-2xl md:text-4xl font-serif mb-2">{name}</p>
                )}
                <div className="my-5">
                <div className="w-full mt-2 xl:mt-6 xl:mb-3 p-2 xl:p-4 bg-white border border-gray-200 rounded-lg shadow flex justify-end">
                <div className="w-1/2 flex justify-between items-center"> <p className="font-normal text-gray-500">
                    Price:
                  </p>
                  <p className="font-normal text-gray-500">
                    ${totalPrice.toFixed(2)}
                  </p></div>
              
                
                </div>

                <div className="w-full p-1 flex justify-end">
                  <p className="mr-8 font-normal">Deposit:</p>
                  <p className="font-normal w-28 text-right">
                    ${parseFloat(deposit).toFixed(2)}
                  </p>
                </div>
                <div className="w-full mb-2 xl:mb-5 p-1 flex justify-end">
                  <p className="mr-8 font-normal">Remaining Balance:</p>
                  <p className="font-normal w-28 text-right">
                    ${parseFloat(balance).toFixed(2)}
                  </p>
                </div>
                </div>
                <CustomPayPal
                  price={deposit}
                  balance={balance}
                />
              </div>
            </div>

      </main>
      {/* <div className="pb-[86vh] md:pb-[89vh] lg:pb-[83vh]"></div> */}
    </Layout>
  )
}

export default Index
