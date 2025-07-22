
export function Footer() {
  return (
    <footer className="border-t border-border mt-20 font-body">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-foreground/60">
        <p>&copy; {new Date().getFullYear()} Muhammad Subhan. All Rights Reserved.</p>
        <p className="mt-1">Built with Next.js, Tailwind CSS, and a touch of AI ✨</p>
        <p className="mt-2 italic">~ To be continued... ~</p>
      </div>
    </footer>
  );
}
