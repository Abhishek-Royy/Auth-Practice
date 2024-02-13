import React from "react";

const BlogPage = () => {
  return (
    <>
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
                  src="https://yt3.googleusercontent.com/sq5rm1ghog5nfzTN0zeUaeXxc2PtB3KvKG2AJpyGN_O0ZPxwUoOS0Y5y1AkbMT1_LTHXMJ94MA=s900-c-k-c0x00ffffff-no-rj"
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
                  src="https://yt3.googleusercontent.com/A_3mLbY1nzH3MPjzEftkO8LK02HazD4PWy9XbwLDQ4hDkbBCla4EkcVNM0kZDTeMWqNCD4jVbA=s900-c-k-c0x00ffffff-no-rj"
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
    </>
  );
};

export default BlogPage;
