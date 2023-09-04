import "./Firstsect.css";

export default function Firstsection() {
    return (
      <section className={`text-center p-3 pb-5 text-white firstsec`}>
        <h1 className="text-5xl font-thin mt-3 mb-2">
          We&apos;ve got you covered
        </h1>

        <p>
          We can reimburese you if something&apos;s not right. Shop with peace
          of mind, we protect your eligible purchases. If your order doesn/t
          arrive or isn&apos;t as the seller described, we can help you get your
          money back
        </p>

        <button className=" bg-blue-500 rounded-3xl mb-2 w-5/6 mt-6 py-4 text-white font-bold text-center">
          Learn more
        </button>
        <p className="mb-2">Own a business? Open a business account.</p>
      </section>
    );
}
