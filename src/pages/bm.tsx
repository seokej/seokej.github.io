import { useRouter } from "next/router";
import { BmComponent } from "@/components/bm";

export default function Toss() {
  const router = useRouter();
  const variantParam = router.query.variant;

  const variant =
    variantParam === "sub" || variantParam === "main"
      ? (variantParam as "main" | "sub")
      : "main";

  return <BmComponent variant={variant} />;
}
