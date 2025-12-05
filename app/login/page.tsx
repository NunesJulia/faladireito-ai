// app/login/page.tsx
import { Suspense } from "react";
import LoginPage from "./login_component";


export default function Page() {
  return (
    <Suspense>
      <LoginPage />
    </Suspense>
  );
}
