import Head from 'next/head';
import { Inter } from 'next/font/google'
import Link from 'next/link';
import Navigationbar from '../../components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <><>
  <script src="/assets/js/main.js"></script>

  <Head>  
  <meta charset="utf-8" />

  <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

  <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport"/>

  <title>Portfolio</title>

  <meta property="og:title" content="Homepage | Atom Template" />

  <meta property="og:locale" content="en_US" />

  <link rel="canonical" href="//" />

  <meta
    property="og:url"
    content="//"
  />

  <meta
    name="description"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  />

  <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

  <meta name="theme-color" content="#5540af" />

  <meta property="og:site_name" content="Atom Template" />

  <meta property="og:image" content="//assets/img/social.jpg" />

  <meta name="twitter:card" content="summary_large_image" />

  <meta name="twitter:site" content="@tailwindmade" />

  <link
    crossOrigin="crossOrigin"
    href="https://fonts.gstatic.com"
    rel="preconnect"
  />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
  rel="stylesheet" 
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
  crossOrigin="anonymous"></link>
  
  <link
    as="style"
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
    rel="preload"
  />

  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
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

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
  </Head>
    
  
  {/* main code */}
  <div id="main" className="relative">
      <div>

      <Navigationbar/>

<div>
<div className="relative bg-cover bg-center bg-no-repeat py-8" style={{backgroundImage: 'url(/assets/img/bg-hero.jpg)'}}>
      
<div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

<div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
  <div className="flex flex-col items-center justify-center lg:flex-row">
    <div className="rounded-full border-8 border-primary shadow-xl">

    <span className="shrink-0">
  <img
    src="/assets/img/profile.jpg"
    className="h-48 rounded-full sm:h-56"
    alt="company logo"
  />
  </span>

    </div>
    <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
      <h1
        className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl"
      >
        Hello I'm Muhammad Waqas Anjum!
      </h1>
      <div
        className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start"
      >
        <div
          className="flex items-center justify-center pl-0 sm:justify-start md:pl-1"
        >
          <p className="font-body text-lg uppercase text-white">Let's connect</p>
          <div className="hidden sm:block">
            <i className="bx bx-chevron-right text-3xl text-yellow"></i>
          </div>
        </div>
        <div className="flex items-center justify-center pt-2 pl-2 sm:justify-start sm:pt-0">
          <a href="https://web.facebook.com/vickybadsha323"><i className="bx bxl-facebook-square text-2xl text-white hover: text-yellow "></i></a>
          <a href="https://twitter.com/Muhamma34800760" className="pl-4"><i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i></a>
          <a href="https://www.linkedin.com/in/mh-waqas-anjum/" className="pl-4"><i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i></a>
          <a href="https://www.instagram.com/vickybadsha323/" className="pl-4"><i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
</div>

<div className="bg-grey-50" id="about">
<div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
<div class="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
<h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"> Who am I?</h2>
<h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">I'm Muhammad Waqas Anjum a MERN Stack Developer</h4>
      <p className="pt-6 font-body leading-relaxed text-grey-20 justify-between">
        Dived into the MERN stack: MongoDB, Express.js, React, and Node.js.
        Build full-stack applications, integrating and ensuring functionality.
        Develop backend skills using Node.js and Express.js.
        Master frontend development with React, creating components and user interfaces.
        Worked on API development using Express.js, including routing and error handling.
        Learned MongoDB, performing CRUD operations and data modeling.
        Acquire testing and debugging skills for MERN applications.
        Engage in project-based learning to strengthen skills and build a portfolio.
        Performed code collaboration and teamwork in a development environment.
      </p>
      <div
        className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start"
      >
        <div className="flex items-center justify-center sm:justify-start">
          <p className="font-body text-lg font-semibold uppercase text-grey-20">
            Connect with me
          </p>
          <div className="hidden sm:block">
            <i className="bx bx-chevron-right text-2xl text-primary"></i>
          </div>
        </div>
        <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
          
          <a href="https://web.facebook.com/vickybadsha323" className="pl-4"><i
              className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"
            ></i>
          </a>{" "}

          <a href="https://twitter.com/Muhamma34800760" className="pl-4"><i
            className="bx bxl-twitter text-2xl text-primary hover:text-yellow">
            </i>
            </a>
          <a href="https://www.linkedin.com/in/mh-waqas-anjum/" className="pl-4">
            <i
              className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"
            ></i>
          </a>
      </div>
    </div>
    </div>


    <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
      <div>
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">HTML & CSS</h4>
          <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
        </div>

        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary" style={{ width: '85%' }}></div>
        </div>
      </div>

      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">mysql</h4>
          <h3 className="font-body text-3xl font-bold text-primary">80%</h3>
        </div>

        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary" style={{ width: '80%' }}></div>
        </div>
      </div>

      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">Javascript Vanilla</h4>
          <h3 className="font-body text-3xl font-bold text-primary">50%</h3>
        </div>

        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary" style={{ width: '50%' }}></div>
        </div>
      </div>

      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">React JS</h4>
          <h3 className="font-body text-3xl font-bold text-primary">50%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary" style={{ width: '50%' }}></div>
        </div>
      </div>

      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">Node JS</h4>
          <h3 className="font-body text-3xl font-bold text-primary">50%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary" style={{ width: '50%' }}></div>
        </div>
      </div>

      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">Express JS</h4>
          <h3 className="font-body text-3xl font-bold text-primary">50%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary" style={{ width: '50%' }}></div>
        </div>
      </div>

      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">MongoDB</h4>
          <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary" style={{ width: '70%' }}></div>
        </div>
      </div>

      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">Bootstrap 5 & React Bootstrap</h4>
          <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary" style={{ width: '70%' }}></div>
        </div>
      </div>

      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">MS OFFICE</h4>
          <h3 className="font-body text-3xl font-bold text-primary">90%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary" style={{ width: '90%' }}></div>
        </div>
      </div>

      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">microsoft POWER BUSINESS INTELLIGENCE (BI)</h4>
          <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary" style={{ width: '70%' }}></div>
        </div>
      </div>
    </div>
</div>

<div className="container py-16 md:py-20" id="services">
  <h2
    className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
  >
    Here's what I'm good at
  </h2>
  <h3
    className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
  >
    These are the services Ioffer
  </h3>

  <div
    className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
  >
    <div className="group rounded px-8 py-12 shadow hover:bg-primary">
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
        <div className="hidden group-hover:block">
          <img
            src="/assets/img/icon-development-white.svg"
            alt="development icon"
          />
        </div>
        <div className="block group-hover:hidden">
          <img
            src="/assets/img/icon-development-black.svg"
            alt="development icon"
          />
        </div>
      </div>
      <div className="text-center">
        <h3
          className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
        >
          WEB DEVELOPMENT
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
        The customer service process is of utmost importance and requires careful attention from customers.
        </p>
      </div>
    </div>

    <div className="group rounded px-8 py-12 shadow hover:bg-primary">
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
        <div className="hidden group-hover:block">
          <img
            src="/assets/img/icon-email-white.svg"
            alt="Email Marketing icon"
          />
        </div>
        <div className="block group-hover:hidden">
          <img
            src="/assets/img/icon-email-black.svg"
            alt="Email Marketing icon"
          />
        </div>
      </div>
      <div className="text-center">
        <h3
          className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
        >
          Email Development
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
        The customer service process is of utmost importance and requires careful attention from customers.
        </p>
      </div>
    </div>

    <div className="group rounded px-8 py-12 shadow hover:bg-primary">
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
        <div className="hidden group-hover:block">
          <img
            src="/assets/img/icon-graphics-white.svg"
            alt="Graphic Design icon"
          />
        </div>
        <div className="block group-hover:hidden">
          <img
            src="/assets/img/icon-graphics-black.svg"
            alt="Graphic Design icon"
          />
        </div>
      </div>
      <div className="text-center">
        <h3
          className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
        >
          Web Design
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
        The customer service process is of utmost importance and requires careful attention from customers.
        </p>
      </div>
    </div>
  </div>
</div>

<div className="container py-16 md:py-20" id="portfolio">
  <h2
    className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
  >
    Check out my Portfolio
  </h2>
  <h3
    className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
  >
    Here's what I have done with the past
  </h3>

  <div
    className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2"
  >
    <a
      href="https://github.com/Waqas93/onlinefoodstore"
      className="mx-auto transform transition-all hover:scale-105 md:mx-0"
    >
      <img
        src="/assets/img/portfolio-apple.png"
        className="w-full shadow"
        alt="portfolio image"
      />
    </a>

    <a
   href="https://github.com/Waqas93/BrowserLocalStorageProject"
   className="mx-auto transform transition-all hover:scale-105 md:mx-0"
 >
   <img
     src="/assets/img/portfolio-fedex.png"
     className="w-full shadow"
     alt="portfolio image"
   />
 </a>
 
    <a
      href="https://vercel.com/waqas93/url-inputshortner"
      className="mx-auto transform transition-all hover:scale-105 md:mx-0"
    >
      <img
        src="/assets/img/portfolio-microsoft.png"
        className="w-full shadow"
        alt="portfolio image"
      />
    </a>
  </div>
</div>

<div className="container py-16 md:py-20" id="work">
  <h2
    className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
  >
    My work experience
  </h2>
  <h3
    className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
  >
    Here's what I did before freelancing
  </h3>

  <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
    <span
      className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"
    ></span>

    <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
      <div className="md:w-2/5">
        <div className="flex justify-center md:justify-start">
          <span className="shrink-0">
            <img
              src="/assets/img/logo-contour.jpg"
              className="h-auto w-32"
              alt="company logo"
            />
          </span>
          <div className="relative ml-3 hidden w-full md:block">
            <span
              className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
            ></span>
          </div>
        </div>
      </div>
      <div className="md:w-3/5">
        <div className="relative flex md:pl-18">
          <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

          <div className="mt-1 flex">
            <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
            <div className="md:-mt-1 md:pl-8">
              <span className="block font-body font-bold text-grey-40"
                >Apr 2023 - May 2023</span
              >
              <span
                className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                >MERN Stack Bootcamp</span
              >
              <div className="pt-2">
                <span className="block font-body text-black">
                  Dived into the MERN stack: MongoDB, Express.js, React, and Node.js.
                  Build full-stack applications, integrating and ensuring functionality
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
      <div className="md:w-2/5">
        <div className="flex justify-center md:justify-start">
          <span className="shrink-0">
            <img
              src="/assets/img/logo-spotify.png"
              className="h-auto w-32"
              alt="company logo"
            />
          </span>
          <div className="relative ml-3 hidden w-full md:block">
            <span
              className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
            ></span>
          </div>
        </div>
      </div>
      <div className="md:w-3/5">
        <div className="relative flex md:pl-18">
          <span
            className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
          ></span>

          <div className="mt-1 flex">
            <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
            <div className="md:-mt-1 md:pl-8">
              <span className="block font-body font-bold text-grey-40"
                >October 2019 - May 2023</span
              >
              <span
                className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                >Data Analyst</span
              >
              <div className="pt-2">
                <span className="block font-body text-black"
                  >Applied programming languages like SQL, HTML, and CSS.
                  Excelled in statistics and statistical packages such as Excel for data analysis. q
                  Utilized data visualization software like Power BI.
                  Showcased proven experience in data analysis.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
      <div className="md:w-2/5">
        <div className="flex justify-center md:justify-start">
          <span className="shrink-0">
            <img
              src="/assets/img/logo-ats.jpeg"
              className="h-auto w-32"
              alt="company logo"
            />
          </span>
          <div className="relative ml-3 hidden w-full md:block">
            <span
              className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
            ></span>
          </div>
        </div>
      </div>
      <div className="md:w-3/5">
        <div className="relative flex md:pl-18">
          <span
            className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
          ></span>

          <div className="mt-1 flex">
            <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
            <div className="md:-mt-1 md:pl-8">
              <span className="block font-body font-bold text-grey-40"
                >August 2015 - September 2019</span
              >
              <span
                className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                >Office Assistant</span
              >
              <div className="pt-2">
                <span className="block font-body text-black">
                  Handling incoming calls and other communications.
                  Managing filing system.Updating paperwork, maintaining documents and word processing.
                  Creating, maintaining, and entering information into databases.
                  </span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container py-16 md:py-20" id="contact">
  <h2
    className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
  >
    Here's a contact form
  </h2>
  <h4
    className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
  >
    Have Any Questions?
  </h4>

  <form className="mx-auto w-full pt-10 sm:w-3/4">
    <div className="flex flex-col md:flex-row">
      <input
        className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
        placeholder="Name"
        type="text"
        id="name"
      />
      <input
        className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
        placeholder="Email"
        type="text"
        id="waqasanjum93@gmail.com"
      />
    </div>
    <textarea
      className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
      placeholder="Message"
      id="message"
      cols="30"
      rows="10"
    ></textarea>
    <button
      className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
    >
      Send
      <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
    </button>
  </form>
  <div className="flex flex-col pt-16 lg:flex-row">
    <div
      className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3"
    >
      <div className="flex items-center">
        <i className="bx bx-phone text-2xl text-grey-40"></i>
        <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
          My Phone
        </p>
      </div>
      <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
        (+92) 300 8794 923
      </p>
    </div>
    <div
      className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
    >
      <div className="flex items-center">
        <i className="bx bx-envelope text-2xl text-grey-40"></i>
        <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
          My Email
        </p>
      </div>
      <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
        waqasanjum93@gmail.com
      </p>
    </div>
    <div
      className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
    >
      <div className="flex items-center">
        <i className="bx bx-map text-2xl text-grey-40"></i>
        <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
          My Address
        </p>
      </div>
      <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
        St#13a, Near Afzaal General Store Shahdata Lahore
      </p>
    </div>
  </div>
</div>

<div
  className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96"
  style={{backgroundImage: 'url(/assets/img/map.png)'}}
></div>

<div
  className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
  style={{backgroundImage: 'url(/assets/img/bg-cta.jpg)'}}
>
  <div className="container relative z-30">
    <h3
      className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl"
    >
      Keep <span className="font-bold">up-to-date</span> <br />
      with what I'm up to
    </h3>
    <form className="mt-6 flex flex-col justify-center sm:flex-row">
      <input
        className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3"
        type="text"
        id="email"
        placeholder="Give me your Email"
      />
      <button
        className="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg"
      >
        Join the club
      </button>
    </form>
  </div>
</div>
</div>
<div className="bg-primary">
  <div className="container flex flex-col justify-between py-3 sm:flex-row">
    <div className="flex items-center">
      <p className="text-center font-body text-white md:text-left">
        © 2022. All rights reserved.
      </p>
    </div>
    <div className="flex items-center justify-center pt-2  sm:justify-start sm:pt-0">
      <a href="/" className="pl-4">
        <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
      </a>
      <a href="/" className="pl-4">
        <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
      </a>
      <a href="/" className="pl-4">
        <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
      </a>
      <a href="/" className="pl-4">
        <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
      </a>
      <a href="/" className="pl-4">
        <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
      </a>
    </div>
  </div>
</div>

           
</div>
</div>
</></>
)
}

