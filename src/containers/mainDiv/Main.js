import React from "react-dom";
import { Layout } from 'antd';
import {ContentStyle} from "./style.js";

// import SignupPage from "../signupPage/signup.js";

const { Sider, Content } = Layout;

function Main() {
    return (
        <>
        <ContentStyle>
            <Layout
                style={{color: "black",
            }}
            >
                <Content>Content
                </Content>
                <Sider>Sider</Sider>
            </Layout>
        </ContentStyle>
        </>
    );
}
export default Main;