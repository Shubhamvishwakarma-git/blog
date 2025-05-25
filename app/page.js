"use client";
import Client_say from "@/components/Client_say";
import { Button } from "@/components/ui/button";
import Typed from "typed.js";
import {React,useEffect, useRef} from 'react';

export default function Page() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["coding", "Web developement", "AI", "Javascript", "NextJs", "ReactJs", "Tailwind CSS", "HTML", "CSS", "TypeScript"],
      typeSpeed: 60,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <main className="bg-background text-foreground transition-colors duration-300">
        <div className="pt-12 pb-14">
          <div className="w-full max-w-7xl mx-auto px-5 py-6 sm:py-8 md:py-12 space-y-5 sm:space-y-8 md:space-y-16">
            {/* Hero Section */}
            <div className="flex flex-col items-center md:flex-row">
              <div className="flex flex-col justify-center w-full md:w-1/2 mb-6 md:mb-0 space-y-3 md:space-y-5 md:pr-10 lg:pr-16">
                <div className="bg-primary text-white flex items-center leading-none rounded-full uppercase px-3 py-1.5 text-xs font-medium">
                  <svg
                    className="w-3.5 h-3.5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  New
                </div>
                <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                  Write anything. Be creative.
                  and learn. <span ref={el} />
                </h1>
                <div>
                  <p className="text-sm font-medium inline">Author:</p>
                  <span className="ml-1 underline text-sm font-medium">
                    Shubham Kumar Vishwakarma
                  </span>
                  <span className="ml-1 text-sm font-medium">
                    · 10th, May 2025 ·
                  </span>
                  <span className="ml-1 text-sm font-medium text-muted-foreground">
                    1hr 20min read
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="/frontpage.png"
                  alt="Creative writing inspiration"
                  className="object-cover rounded-lg max-h-64 sm:max-h-96 w-full h-full"
                />
              </div>
            </div>

            {/* Blog Cards Section */}
            {/* Blog Cards Section */}
            {/* <div className="grid grid-cols-12 gap-x-8 gap-y-16 sm:px-5">
              {[1, 2, 3].map((_, i) => (
                <article
                  key={i}
                  className="col-span-12 sm:col-span-6 xl:col-span-4 group transition-transform duration-300 transform hover:scale-[1.03]"
                >
                  <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={`https://source.unsplash.com/500x300/?nature,${i}`}
                      alt={`Nature image ${i + 1}`}
                      className="object-cover w-full h-56 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="p-4 space-y-3">
                      <p className="bg-primary text-white text-sm font-medium leading-none px-3 py-1.5 rounded-full uppercase inline-block">
                        Entertainment
                      </p>
                      <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
                        Improving your day to the MAX
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <div>
                        <span className="text-xs font-medium underline">
                          Jack Sparrow
                        </span>
                        <span className="ml-1 text-xs font-medium">
                          · 23rd, March 2021 ·
                        </span>
                        <span className="ml-1 text-xs font-medium text-muted-foreground">
                          1hr 20min read
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div> */}
            <div className="flex justify-center items-center py-5  flex-col sm:flex-row gap-15">
              <a
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-xl border border-primary text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:text-background transition"
              >
                📝 Read Blogs
              </a>
              <a
                href="/login"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-xl border border-primary text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:text-background transition"
              >
                🔐 Login
              </a>
            </div>
          </div>
        </div>
        {/* Pricing Section */}
        <section className="bg-muted dark:bg-background py-2 transition-colors">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 text-foreground dark:text-white">
              Our Pricing Plans
            </h2>
            <p className="text-muted-foreground mb-12">
              Choose a plan that fits your needs.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Free",
                  price: "$0",
                  features: [
                    "✔ Basic features",
                    "✔ Email support",
                    "✖ No analytics",
                  ],
                  button: "Get Started",
                  highlight: false,
                },
                {
                  title: "Pro",
                  price: "$29",
                  features: [
                    "✔ All Free features",
                    "✔ Advanced analytics",
                    "✔ Priority support",
                  ],
                  button: "Start Free Trial",
                  highlight: true,
                },
                {
                  title: "Enterprise",
                  price: "Custom",
                  features: [
                    "✔ All Pro features",
                    "✔ Dedicated manager",
                    "✔ Custom solutions",
                  ],
                  button: "Contact Us",
                  highlight: false,
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-8 shadow-md transition duration-300 transform hover:shadow-xl hover:scale-105
            ${
              plan.highlight
                ? "bg-primary text-white"
                : "bg-white text-foreground dark:bg-gray-900 dark:text-white"
            }`}
                >
                  <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
                  <p className="text-4xl font-bold mb-4">
                    {plan.price}
                    {plan.price !== "Custom" && (
                      <span className="text-base font-medium">/month</span>
                    )}
                  </p>
                  <ul
                    className={`mb-6 space-y-2 ${
                      plan.highlight
                        ? ""
                        : "text-muted-foreground dark:text-gray-400"
                    }`}
                  >
                    {plan.features.map((f, j) => (
                      <li key={j}>{f}</li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full py-2 rounded-xl transition font-medium
              ${
                plan.highlight
                  ? "bg-white text-primary hover:bg-gray-100 dark:hover:bg-gray-200"
                  : "bg-primary text-white hover:bg-primary/90"
              }`}
                  >
                    {plan.button}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Client_say />
      </main>


      
    </>
  );
}
