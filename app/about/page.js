export default function AboutPage() {
  return (
    <>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-foreground space-y-10">
      {/* Page Heading */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
          About This Blog
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A developer blog by{" "}
          <span className="text-primary font-medium">
            Shubham Kumar Vishwakarma
          </span>
          , sharing tutorials, code tips, and web development insights.
        </p>
      </header>

      {/* Section: About Me */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">👋 Who Am I?</h2>
        <p className="text-muted-foreground">
          I&apos;m Shubham Kumar Vishwakarma, a passionate frontend developer with a
          love for building beautiful, performant, and user-friendly web
          applications. I use this blog as a space to document what I learn and
          to share valuable tutorials with the developer community.
        </p>
      </section>

      {/* Section: What You’ll Find */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          📚 What You&apos;ll Find Here
        </h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>Step-by-step coding tutorials</li>
          <li>Tips and tricks for React, JavaScript, Next.js, and more</li>
          <li>Frontend performance and UI/UX techniques</li>
          <li>Modern tools and library integrations</li>
          <li>Developer productivity and best practices</li>
        </ul>
      </section>

      {/* Section: Tech Behind the Blog */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          🛠️ Built With
        </h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>
            <span className="font-medium text-foreground">Next.js:</span> for
            performance, routing, and SSR
          </li>
          <li>
            <span className="font-medium text-foreground">Tailwind CSS:</span>{" "}
            for fully responsive and theme-aware design
          </li>
          <li>
            <span className="font-medium text-foreground">
              Markdown & Gray-Matter:
            </span>{" "}
            for writing and storing blog content
          </li>
          <li>
            <span className="font-medium text-foreground">
              rehype-pretty-code:
            </span>{" "}
            for beautiful syntax highlighting with copy buttons
          </li>
        </ul>
      </section>

      {/* Section: Theme & Responsiveness */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          🎨 Designed for Everyone
        </h2>
        <p className="text-muted-foreground">
          Whether you&apos;re browsing on a desktop or mobile, using light mode or
          dark mode — this blog is built to be clean, accessible, and responsive
          for all users.
        </p>
      </section>

      {/* Section: Final Note */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
           📬 Let&apos;s Connect
        </h2>
        <p className="text-muted-foreground">
          Thanks for stopping by! If you enjoy the content or want to
          collaborate, feel free to connect with me on LinkedIn or GitHub.
        </p>
      </section>

    </div>
    </>
  );
}
