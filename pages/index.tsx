import Button from "@Components/materialUI/button";
import { NextPage } from "next";
import { Router, useRouter } from "next/router";
import * as React from "react";
import { RouteName } from "src/routers/routeName";

const HomePage: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push(RouteName.HOME)}
      >
        Redirect
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push(RouteName.SIGN_IN)}
      >
        Sign in page
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push(RouteName.EMPLOYEE)}
      >
        Employee page
      </Button>
    </div>
  );
};

export default HomePage;
