import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function RootPage() {
  const headersList = await headers();

  const locale =
    headersList
      .get("accept-language")
      ?.split(",")[0]
      .split("-")[0] || "en";

  redirect(`/${locale}/home`);
}
