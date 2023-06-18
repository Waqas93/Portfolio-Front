import { useRouter } from "next/router";
import Head from "next/head";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import Navbar from "../../../components/Navbar";

export default function Page({blog}) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title> {blog.title} </title>
        <meta
          property="og:title"
          content="How to become a frontend developer | Atom Template"
        />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="//post" />
        <meta property="og:url" content="//post" />
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la"
        />
        <link rel="icon" href="/favicon.ico?v=2" type="image/x-icon" />
        <meta name="theme-color" content="#5540af" />
        <meta property="og:site_name" content="Atom Template" />
        <meta property="og:image" content="//assets/img/social.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tailwindmade" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossOrigin"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;60"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          crossOrigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet"
        />
        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>
        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css"
        />
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js"></script>
      </Head>

      <div id="main" class="relative">
        <div>
          <div class="w-full z-50 top-0 py-3 sm:py-5  bg-primary ">

        <div>
          <Navbar/>
        </div>



          </div>

          <div class="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-o o mobileMenu">
            <div class="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
              <button class="absolute top-0 right-0 mt-4 mr-4">
              <h2 className='text-white text-lg font-bold'>Portfolio</h2>
              </button>

              <ul class="mt-8 flex flex-col">
                <li class="py-2">
                  <a
                    href="/#about"
                    class="pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    About
                  </a>
                </li>

                <li class="py-2">
                  <a
                    href="/#services"
                    class="pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Services
                  </a>
                </li>

                <li class="py-2">
                  <a
                    href="/#portfolio"
                    class="pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Portfolio
                  </a>
                </li>


                <li class="py-2">
                  <a
                    href="/#work"
                    class="pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Work
                  </a>
                </li>

                <li class="py-2">
                  <a
                    href="/#blog"
                    class="pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Blog
                  </a>
                </li>

                <li class="py-2">
                  <a
                    href="/#contact"
                    class="pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div class="container py-6 md:py-10">
              <div class="mx-auto max-w-4xl">
                <div class="">
                  <h1 class="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                    {blog.title}
                  </h1>
                </div>
                <div class="prose max-w-none pt-8">
                  <PortableText
                    content={blog.content}
                    projectId="pk7y0923"
                    dataset="production"
                    serializers={{
                      h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                      li: ({ children }) => (
                        <li classNameName="special-list-item">{children}</li>
                      ),
                    }}/>
                </div>
              </div>

              <div class="mt-10 flex justify-between border-t border-lila py-12">
                <a href="/" class="flex items-center">
                  <i class="bx bx-left-arrow-alt text-2xl text-primary"></i>
                  <span class="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">
                    Previous Post
                  </span>
                </a>
                <a href="/" class="flex items-center">
                  <span class="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">
                    Next Post
                  </span>
                  <i class="bx bx-right-arrow-alt text-2xl text-primary"></i>
                </a>
              </div>


            </div>
          </div>
        </div>

        <div class="bg-primary">
          <div class="container flex flex-col justify-between py-6 sm:flex-row">
            <p class="text-center font-body text-white md:text-left">
              © Copyright 2022. All right reserved, ATOM.
            </p>
            <div class="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
              <a href="/">
                <i class="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="/" class="pl-4">
                <i class="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="/" class="pl-4">
                <i class="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="/" class="pl-4">
                <i class="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="/" class="pl-4">
                <i class="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const client = createClient({
    projectId: "pk7y0923",
    dataset: "production",
    useCdn: true,
  });
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;
  const blog = await client.fetch(query);
  return {
    props: {
      blog: blog, // Assign the fetched blog object to 'blog'
    },
  };
};
