export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,4rem)] py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Magri Mohammed Yassine
        </p>
        <p className="text-sm text-text-muted">
          Built in Rabat, Morocco
        </p>
      </div>
    </footer>
  )
}
