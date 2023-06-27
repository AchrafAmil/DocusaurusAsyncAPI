import React from 'react';
import Layout from '@theme/Layout';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import AsyncApiComponent, { ConfigInterface } from "@asyncapi/react-component";

export default function Hello() {
    return (
        <Layout title="Hello" description="Hello React Page">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>
                <p>
                    Just added a custom <code>ReactJS</code> component 🎉
                </p>
                <AwesomeButton type="primary">Look, awesome button here</AwesomeButton>
            </div>
        </Layout>
    );
}