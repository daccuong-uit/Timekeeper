import React from 'react';
import brain from '../assets/brain.svg'
import { Button } from 'antd';Button
import { GithubOutlined } from '@ant-design/icons';
import { Color } from '../assets/color';

const HeaderMessage = () => {
    return (
        <div style={{padding: '10px', marginBottom: '20px', backgroundColor: Color.receive, fontSize: '16px', borderRadius: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <img src={brain} alt="icon" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                <span style={{ marginLeft: '10px', fontWeight: 'bolder', fontSize: '24px' }}>Sentiment Analysis</span>
            </div>
            <Button type="primary" shape="round" icon={<GithubOutlined />} size='small' style={{backgroundColor: Color.receivePlus, color: 'black', fontWeight:'inherit', marginBottom: '10px'}}>
                Github
            </Button>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                <div style={{ backgroundColor: 'transparent', padding: '10px', borderRadius: '5px'}}>
                General-purpose assistant bot. For queries requiring up-to-date information, it can access real-time data from the web for more accurate answers. Assistant can also generate images using FLUX-schnell (try "Create an image of a futuristic city").
                </div>
            </div>
        </div>
    );
};

export default HeaderMessage;