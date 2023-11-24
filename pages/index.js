import Spinner from "@/components/Spinner";
import dynamic
  from "next/dynamic"
import { Suspense } from "react";
const SuspenseComponent = dynamic(() => import('../components/SuspenseCompnent'), { suspense: true });


const Home = () => {
  return (
    <Suspense fallback={<Spinner />
    }>
      <SuspenseComponent />
    </Suspense>)
}

export default Home;