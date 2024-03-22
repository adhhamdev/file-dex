import Card from "@/components/Card";
import Image from "next/image";
import icon from './icon.png';

export default function Home() {
  const cards = [
    {
      image: "/convert-file.png",
      href: 'convert-file',
      title: "Convert File",
      description: "Convert files from one format to another.",
    },
    {
      image: "/capture-website.png",
      href: 'capture-website',
      title: "Capture Website",
      description: "Capture websites and save them as images or PDFs.",
    },
    {
      image: "/optimize-file.png",
      href: 'optimize-file',
      title: "Optimize File",
      description:
        "Optimize files to reduce their size without losing quality.",
    },
    {
      image: "/create-thumbnail.png",
      href: 'create-thumbnail',
      title: "Create Thumbnail",
      description: "Generate thumbnail images from larger images.",
    },
    {
      image: "/add-watermark.png",
      href: 'add-watermark',
      title: "Add Watermark",
      description:
        "Add watermarks to protect your files from unauthorized use.",
    },
    {
      image: "/get-metadata.png",
      href: 'get-metadata',
      title: "Get Metadata",
      description: "Retrieve metadata information from files.",
    },
    {
      image: "/write-metadata.png",
      href: 'write-metadata',
      title: "Write Metadata",
      description: "Write or modify metadata information in files.",
    },
    {
      image: "/merge-files.png",
      href: 'merge-files',
      title: "Merge Files",
      description: "Merge multiple files into a single file.",
    },
    {
      image: "/create-archive.png",
      href: 'create-archive',
      title: "Create Archive",
      description: "Create compressed archives of files and folders.",
    },
    {
      image: "/execute-command.png",
      href: 'execute-command',
      title: "Execute Command",
      description: "Execute custom commands or scripts.",
    },
  ];

  return (
    <>
      <header
        className="bg-fixed py-4 bg-background-image bg-contain bg-no-repeat md:bg-cover flex items-center rounded-b-xl h-4/5 md:h-96"
        style={{ boxShadow: "inset 0 -2px 10px 2px rgba(0, 0, 0, .2)" }}
      >
        <div className="container md:ml-32 flex flex-col justify-center md:block">
          <h1 className="flex items-center text-2xl text-center md:text-5xl md:text-left font-bold text-white mx-auto md:mx-0 mb-5">
            <Image src={icon} width={50} alt="Logo" />
            <span className="ml-0 md:ml-4">FileDex.</span>
          </h1>
          <p className="mx-auto text-center text-wrap w-2/3 md:text-left md:mx-0 md:text-3xl text-gray-200 ">
            Find the right tool for your file management needs.
          </p>
          <div className="mt-8 text-center md:text-left">
            <a
              href="#tools"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            >
              Get Started
            </a>
          </div>
          <Image
            src="/header-illustration.svg"
            alt=""
            width={512}
            height={512}
            className="absolute right-10 top-1/4 w-32 md:right-40 md:top-1/4 md:w-96"
          />
        </div>
      </header>
      <main>
        <section id="tools" className="mt-32 md:mt-32">
          <h1 className="text-slate-700 ml-12 text-2xl font-bold">File Management Tools</h1>
          <hr className="rounded-md h-2 bg-slate-300 w-32 ml-12 mt-2" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10 my-8">
            {cards.map((card, index) => (
              <Card
                key={index}
                card={card}
              />
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-gray-700 py-4">
        <section className="py-8">
          <div className="container">
            <h2 className="text-2xl text-center text-white font-bold mb-4">Connect with me</h2>
            <div className="flex justify-center">
              <a target="_blank" href="https://twitter.com/AdhhamDev" className="mx-4">
                <Image src="/twitter.png" alt="Twitter" width={36} height={36} />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/adhham/" className="mx-4">
                <Image src="/linkedin.png" alt="LinkedIn" width={36} height={36} />
              </a>
              <a target="_blank" href="https://web.facebook.com/msmadhhamsafwan/" className="mx-4">
                <Image src="/facebook.png" alt="Facebook" width={36} height={36} />
              </a>
              <a target="_blank" href="https://github.com/adhhamdev" className="mx-4">
                <Image src="/github.png" alt="GitHub" width={36} height={36} />
              </a>
            </div>
          </div>
        </section>
        <p className="text-center text-white bg-fixed">
          &copy; {new Date().getFullYear()} FileDex with 💖 from Adhham. All rights reserved.
        </p>
      </footer>
    </>
  );
}
