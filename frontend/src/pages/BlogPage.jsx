import React, { useEffect } from "react";
import { useAuth } from "../auth/auth";

const BlogPage = () => {
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      const timeoutId = setTimeout(() => {
        window.location.href = "/login";
      }, 3000);

      // Clear the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <div className="bg-gradient-to-l from-blue-950 to-zinc-800 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tigh text-amber-300 sm:text-4xl">
                From the blog
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-400">
                Learn how to boost your skills with our expert advice.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2020-03-16" className="text-gray-500">
                    Mar 16, 2020
                  </time>
                  <a
                    href="#"
                    className="relative z-10 rounded-full bg-amber-50 px-3 py-1.5 font-medium text-gray-700 hover:bg-amber-100"
                  >
                    Marketing
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-amber-400 group-hover:text-amber-200">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      EdTech Corporation
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src="https://media.licdn.com/dms/image/D4D03AQHGNAxeyJhZbQ/profile-displayphoto-shrink_200_200/0/1685972237021?e=2147483647&v=beta&t=2xEX518MiNimUc39nr6Hv4r31rS9YDACwxKCkKeequ8"
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-lime-400">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Shardha Khapra
                      </a>
                    </p>
                    <p className="text-gray-400">Co-Founder / CTO</p>
                  </div>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2020-03-16" className="text-gray-500">
                    Mar 16, 2020
                  </time>
                  <a
                    href="#"
                    className="relative z-10 rounded-full bg-amber-50 px-3 py-1.5 font-medium text-gray-700 hover:bg-amber-100"
                  >
                    Marketing
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-amber-400 group-hover:text-amber-200">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Improve customer experience & startup Idea
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRmfZmrMBMtCCiRh2kBHD6mUn_y3PnClGKYCcirT-BDNkRX6TEtnxgSA2uFxnwr5cVLc&usqp=CAU"
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-lime-400">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Anupam Mittal
                      </a>
                    </p>
                    <p className="text-gray-400">Co-Founder / CTO</p>
                  </div>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2020-03-16" className="text-gray-500">
                    Mar 16, 2020
                  </time>
                  <a
                    href="#"
                    className="relative z-10 rounded-full bg-amber-50 px-3 py-1.5 font-medium text-gray-700 hover:bg-amber-100"
                  >
                    Marketing
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-amber-400 group-hover:text-amber-200">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Innovative Tech idea & mindset
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src="https://media.licdn.com/dms/image/C5103AQGVpPvlt0HvkA/profile-displayphoto-shrink_800_800/0/1562407623657?e=2147483647&v=beta&t=jONY0il2EZ6635BN68jupAe--wuLz0ULmmODyGH89so"
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-lime-400">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Tanay Pratap
                      </a>
                    </p>
                    <p className="text-gray-400">Co-Founder / CTO</p>
                  </div>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2020-03-16" className="text-gray-500">
                    Mar 16, 2020
                  </time>
                  <a
                    href="#"
                    className="relative z-10 rounded-full bg-amber-50 px-3 py-1.5 font-medium text-gray-700 hover:bg-amber-100"
                  >
                    Marketing
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-amber-400 group-hover:text-amber-200">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Full stack developer
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src="https://pbs.twimg.com/profile_images/1688266765095276544/EyCtuQS2_400x400.jpg"
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-lime-400">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Ezsnippet
                      </a>
                    </p>
                    <p className="text-gray-400">Co-Founder / CTO</p>
                  </div>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2020-03-16" className="text-gray-500">
                    Mar 16, 2020
                  </time>
                  <a
                    href="#"
                    className="relative z-10 rounded-full bg-amber-50 px-3 py-1.5 font-medium text-gray-700 hover:bg-amber-100"
                  >
                    Marketing
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-amber-400 group-hover:text-amber-200">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      UI/UX Designer
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src="https://pbs.twimg.com/profile_images/1584897460077735938/OBRvYRNS_400x400.jpg"
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-lime-400">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Piximperfect
                      </a>
                    </p>
                    <p className="text-gray-400">Co-Founder / CTO</p>
                  </div>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2020-03-16" className="text-gray-500">
                    Mar 16, 2020
                  </time>
                  <a
                    href="#"
                    className="relative z-10 rounded-full bg-amber-50 px-3 py-1.5 font-medium text-gray-700 hover:bg-amber-100"
                  >
                    Marketing
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-amber-400 group-hover:text-amber-200">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      IT Consultancy/Analyast
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_Pichai_%282023%29_cropped.jpg/800px-Sundar_Pichai_%282023%29_cropped.jpg"
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-lime-400">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Sundar Pichai
                      </a>
                    </p>
                    <p className="text-gray-400">Co-Founder / CTO</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      ) : (
        // Optional: You can show a loading spinner or message here

        <div
          aria-label="Loading..."
          role="status"
          class="flex items-center justify-center space-x-2 w-full h-80"
        >
          <svg
            class="h-20 w-20 animate-spin stroke-gray-500"
            viewBox="0 0 256 256"
          >
            <line
              x1="128"
              y1="32"
              x2="128"
              y2="64"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="195.9"
              y1="60.1"
              x2="173.3"
              y2="82.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="224"
              y1="128"
              x2="192"
              y2="128"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="195.9"
              y1="195.9"
              x2="173.3"
              y2="173.3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="128"
              y1="224"
              x2="128"
              y2="192"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="60.1"
              y1="195.9"
              x2="82.7"
              y2="173.3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="32"
              y1="128"
              x2="64"
              y2="128"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="60.1"
              y1="60.1"
              x2="82.7"
              y2="82.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
          </svg>
          <span class="text-4xl font-medium text-gray-500">Loading...</span>
        </div>
      )}
    </>
  );
};

export default BlogPage;
