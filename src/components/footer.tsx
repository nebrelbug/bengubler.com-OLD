// I'll probably add footer links here at some point

export function Footer() {
  const date = new Date()

  return (
    <div className={"w-full border-t border-gray-200 py-6 mt-auto"}>
      <p className="text-center">&copy; {date.getFullYear()} Ben Gubler</p>
    </div>
  )
}
