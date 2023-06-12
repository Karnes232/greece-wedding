import React from "react"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import PayPalButtonWrapper from "../PayPalButtonWrapper/PayPalButtonWrapper"

const liveId =
  "AQEgC9JKIvPEyauVBaX6Kxv1cQwaiylZ_Cbzu29ORf_ChBYZeM5FwGUSd4hCXGBMFBYAQLN2Vpez50lx"
const sandBox =
  "AWKpOxlq063t4e3-YvGIHBWohFbzZ_o0Y1M2juHc6EaAr5iK_UfOAEKb_YxhdpRvC5uu_Sj444MyUzmZ"

const CustomPayPal = ({ price, balance }) => {
  const currency = "USD"
  return (
    <div className="flex justify-center md:w-80 xl:w-96">
      <PayPalScriptProvider
        options={{
          "client-id": liveId,
          components: "buttons",
          currency: "USD",
        }}
      >
        <PayPalButtonWrapper
          currency={currency}
          showSpinner={false}
          amount={price}
          balance={balance}
      
        />
      </PayPalScriptProvider>
    </div>
  )
}

export default CustomPayPal
