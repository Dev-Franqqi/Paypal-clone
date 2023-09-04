import Image from "next/image"
import Buyonline from "../../public/images/buyonline_browser1.png"
import Buyonline2 from "../../public/images/buyonline_browser2.png"
import Buyonline3 from "../../public/images/buyonline_browser3.png"

export default function Thirdsection() {
  return (
    <section className="text-center py-20  font-light  bg-gray-100">
      <div className="px-10">
        <h2 className="text-3xl mb-8">Paypal connects buyers and sellers.</h2>

        <h6 className=" font-normal">For buyers</h6>
        <hr className="bg-black w-2/6 mx-auto mt-3" />
      </div>
      <ol className="text-left list-inside list-decimal py-4 ">
        <Image
          className="mx-auto"
          src={Buyonline}
          width={200}
          height={200}
          alt="buy online"
        />
        <li className="relative flex px-4">
          <div className="rounded-full h-10 w-10 flex items-center justify-center border border-blue-black mr-4">
            1
          </div>
          <div>
            <span className="text-blue-500">Sign up</span> with just and email
            and password.
          </div>
        </li>
        <hr className="bg-slate-700 mt-4 mx-0 mb-4" />
        <Image
          className="mx-auto"
          src={Buyonline2}
          width={200}
          height={200}
          alt="buy online"
        />

        <li className="relative flex mt-4 items-center px-4">
          <div className="rounded-full h-10 w-10 flex items-center justify-center border border-blue-black mr-4">
            2
          </div>
          Securely add your cards.
        </li>
        <hr className="bg-slate-700 mt-4 mx-0 mb-4" />

        <Image
          className="mx-auto"
          src={Buyonline3}
          width={200}
          height={200}
          alt="buy online"
        />
        <li className="relative flex mt-4 items-center px-4">
          <div className="rounded-full h-10 w-10 flex items-center justify-center border border-blue-black mr-4">
            3
          </div>
          Use the PayPal button to check out with just an email address and a
          password.
        </li>
      </ol>
      <button className="block font-bold border border-blue-700 px-2 py-4 rounded-3xl text-blue-700 w-4/6 mt-5 mx-auto text-center">
        Learn More
      </button>
    </section>
  );
}
