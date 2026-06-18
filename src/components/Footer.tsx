export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[13px] text-text-muted">
          &copy; {new Date().getFullYear()} Magri Mohammed Yassine
        </p>
        <p className="text-[13px] text-text-muted">
          Built in Rabat, Morocco
        </p>
      </div>
    </footer>
  )
}
