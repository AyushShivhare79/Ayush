import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-dvh">
        <div className="border border-white h-full w-2/4 mx-auto">
          <div className="flex border my-10 items-center justify-between">
            <h1 className="text-5xl">Hi, I am Ayush</h1>
            <Image
              src={
                "https://pbs.twimg.com/profile_images/1867139291182510080/Bt9Z46O0_400x400.jpg"
              }
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <div>
            <p>
              I am a software engineer with a passion for building full stack
              web applications. I love working with Next.js, React and Node.js,
              and I care about clean design, solid architecture, and always
              learning something new. In my free time, I like to contribute to
              open-source projects and explore new technologies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
