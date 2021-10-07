import type { NextPage } from "next";
import Button from "@Components/materialUI/button";
import { useRouter } from "next/router";

const Home: NextPage = () => {
    const router = useRouter();

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => router.push("/home")}
            >
                Start loading
            </Button>
        </div>
    );
};

export default Home;
