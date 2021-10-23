import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title }  = Typography;

const HomePage = () => {
    const { data, isFetching  } = useGetCryptosQuery();
    const globalStats = data?.data; 
    console.log(globalStats);
    if(isFetching) return 'Loading';
    return (
        <>
            <Title level={2} className="heading" > Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title="Total Crypto Currencies" value ={globalStats.totalCoins} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value ={globalStats.totalExchanges} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value = {millify(globalStats.totalMarketCap)} /></Col>
                <Col span={12}><Statistic title="Total 24 hour volume" value ={millify(globalStats.total24hVolume)} /></Col>
                <Col span={12}><Statistic title="Total Markets" value ={globalStats.totalMarkets} /></Col>
            </Row>

        </>
    )
}

export default HomePage
