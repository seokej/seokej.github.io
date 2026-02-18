import { useRouter } from "next/router";
import { HiComponent } from "@/components/hi";

export default function Toss() {
  const router = useRouter();
  const variantParam = router.query.variant;

  const variant =
    variantParam === "sub" || variantParam === "main"
      ? (variantParam as "main" | "sub")
      : "main";

  return <HiComponent variant={variant} />;
}
