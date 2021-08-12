import React from "react-dom";
import { Layout } from 'antd';
import {Headerdiv} from "./style.js";

const { Header } = Layout;


function HeaderPage() {
  return (
    <Headerdiv>
        <Header className="change-css">
            <h1 className="logo-text">Camagro</h1>
        </Header>

    </Headerdiv >
  );
}

export default HeaderPage;
