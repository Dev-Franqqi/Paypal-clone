import Image from "next/image";
import Individual from "../../public/images/1-individuals.jpg"
export default function Secondsection() {
  return (
    <section className="text-center p-3">
      <h2 className="text-3xl font-normal">
        PayPal is for everyone who pays online
      </h2>
      <Image className="mx-auto mt-9" src={Individual} alt="" width={60} height={60} />
      <h3 className="text-2xl font-normal mt-2">Individuals</h3>
      <p className="mt-3">
        Find out why we have more than 200M active accounts worldwide.
      </p>
      <button className="font-bold border border-blue-700 p-2 rounded-3xl text-blue-700 w-5/6 mt-3 text-center">
        Learn More
      </button>
    </section>
  );
}
