import { useRouter } from "next/router";
import { NwComponent } from "@/components/nw";

export default function Toss() {
  const router = useRouter();
  const variantParam = router.query.variant;

  const variant =
    variantParam === "sub" || variantParam === "main"
      ? (variantParam as "main" | "sub")
      : "main";

  return <NwComponent variant={variant} />;
}
