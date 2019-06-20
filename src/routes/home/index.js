/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import MemberLayout from "../../components/Layout/MemberLayout";
import Home from "./Home";
import AuthLayout from "../../components/Layout/AuthLayout";

async function action({ fetch }) {
  return {
    title: 'React Starter Kit',
    chunks: ['home'],
    component: (
      <AuthLayout>
        <Home/>
      </AuthLayout>
    ),
  };
}

export default action;
