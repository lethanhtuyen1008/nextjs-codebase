import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Button from "@Components/materialUI/button";
import { useRouter } from "next/router";
import { RouteName } from "src/routers/routeName";

const Home: NextPage = () => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <Button
                variant="contained"
                color="primary"
                onClick={() => router.push(RouteName.LOGIN)}
            >
                Redirect
            </Button>
        </div>
    );
};

export default Home;
