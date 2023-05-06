// links on this page are broken, but that's a known issue
// see https://github.com/vercel/next.js/issues/47862
// TODO: update NextJS when the issue is fixed

export default function NotFound() {
  return (
    <div className="max-w-screen-lg m-auto">
      <h2 className="text-4xl text-center font-bold mt-20">
        404 - Page Not Found
      </h2>
      <p className="text-center mt-10">
        Sorry! Try going back to the page you were just on.
      </p>
    </div>
  )
}
