import React from 'react';
import { Button, Space } from 'antd';
import { ReloadOutlined, HeartOutlined, FrownOutlined } from '@ant-design/icons';
import { Color } from '../assets/color';

const SendCM = ({ sendMessage }) => {
    return (
        <div style={{padding: '10px', marginBottom: '5px', backgroundColor: 'transparent', fontSize: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                <div style={{ backgroundColor: Color.send, color: '#ffffff', padding: '10px', borderRadius: '10px'}}>
                    {sendMessage}
                </div>
            </div>
        </div>
    );
};

export default SendCM;