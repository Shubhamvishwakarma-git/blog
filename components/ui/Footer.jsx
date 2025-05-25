
export default function Footer() {
  return (
    <div>
      {/* Footer Note */}
      <footer className="text-center text-sm text-muted-foreground border-t border-border pb-4">
        <div className="text-center text-sm text-muted-foreground  border-t border-border p-2">
          © {new Date().getFullYear()} Shubham Kumar Vishwakarma. All rights
          reserved.
        </div>
        Built with ❤️ using Next.js and Tailwind CSS.
      </footer>
    </div>
  )
}


