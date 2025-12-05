export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/prompt/:path*", "/home/:path*"], // rotas protegidas
};
