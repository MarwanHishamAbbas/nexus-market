import { NextResponse, type NextRequest } from "next/server"
import { updateSession } from "@/lib/supabase/middleware"
import { createClient } from "@/lib/supabase/server"

export async function middleware(request: NextRequest) {
  const supbase = createClient()
  const {
    data: { user },
  } = await supbase.auth.getUser()

  if (user && ["/sign-in", "/sign-up"].includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL!}/`)
  }
  if (
    user?.email !== "marwanhiisham@gmail.com" &&
    ["/admin"].includes(request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL!}/`)
  }
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
