import Button from 'components/materialUI/button';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import { EMPLOYEE, SIGN_IN } from 'libs/commons/routeName';

const HomePage: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Button variant='contained' color='primary' onClick={() => router.push(SIGN_IN)}>
        Sign in page
      </Button>

      <Button variant='contained' color='primary' onClick={() => router.push(EMPLOYEE)}>
        Employee page
      </Button>
    </div>
  );
};

export default HomePage;
