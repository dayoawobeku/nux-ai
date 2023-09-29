import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to Content
      </a>

      <div className="home w-full px-4">
        <div className="flex flex-col min-h-screen mx-auto">
          <Nav />
          <main className="grow flex items-center" id="main-content">
            <p>Main content here</p>
          </main>
          <footer>
            <p>Footer content here</p>
          </footer>
        </div>
      </div>
    </>
  );
}
