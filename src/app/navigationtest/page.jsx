"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  //   const router = useRouter();
  //   const searchParams = useSearchParams();
  //   console.log(searchParams);
  //   const path = usePathname();
  //   console.log(path);
  //   const searchParams = useSearchParams();
  //   const q = searchParams.get("q");
  //   console.log(q);
  const handleClick = () => {
    console.log("clicked");
    // router.push("/");
    // router.replace("/");
    // router.refresh();
    // router.back();
    // router.forward();
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click Here
      </Link>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default NavigationTestPage;
