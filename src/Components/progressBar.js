import React from 'react';
import 'antd/dist/antd.css';
import { Progress } from 'antd';
import './progressBar.css'
import './style.css'


const Prog = () => (
    <>
    <b>HTML</b>
    <Progress percent={75} />
    <b>CSS</b>
    <Progress percent={75}  />
    <b>JAVASCRIPT</b>
    <Progress percent={60}  />
    <b>ADVANCED  JAVASCRIPT</b>
    <Progress percent={50}  />
    <b>REACT JS</b>
    <Progress percent={60}  />
    </>
);

export default Prog;

