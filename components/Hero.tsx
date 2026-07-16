import Link from "next/link";
export default function Hero() {
  return (
    <section className="py-24 flex flex-col justify-center items-center text-center bg-gradient-to-b from-slate-900 to-black text-white">

      <h1 className="text-6xl font-bold">
        AI Resume Screening
      </h1>

      <p className="text-xl mt-6 max-w-2xl text-gray-300">
        Find the best candidates in seconds using Artificial Intelligence.
      </p>

      <div className="mt-10 flex gap-5">

        <Link
  href="/login"
  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
>
  Get Started
</Link>

<Link
  href="/about"
  className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition"
>
  Learn More
</Link>

      </div>

    </section>
  );
}