import { NextRequest } from "next/server"

import languageMiddleware from "@/middlewares/language"


export const middleware = async(request:NextRequest) =>{
  const language = await languageMiddleware(request)
  return language
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}