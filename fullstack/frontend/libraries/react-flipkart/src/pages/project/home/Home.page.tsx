import { Col, Container, Row } from "react-bootstrap"
import { MyBootstrapNavbar } from "../../../components/navbar/MyBootstrapNavbar.com"
import { MySlider } from "../../../components/slider/MySlider.com"
import { MyMuiCard } from "../../../components/cards/MyMuiCard.com"
import img from '../../../static/images/1.jpg'
import img1 from '../../../static/images/2.jpg'
import img2 from '../../../static/images/3.jpg'
import { useEffect, useState } from "react"
import { flipkartApi } from "../../../service/flipkart.service"
export const Home:React.FC<{}>=()=>{
    let [apiData,setApiData]=useState([])
    useEffect(()=>{
        (async()=>{
         let data= await  flipkartApi()
         setApiData(data)
        })()
    },[])
    console.log("apiData",apiData)

    return <>
    <Container fluid>
        <Row>
            <Col>
            <MyBootstrapNavbar/>
            </Col>
        </Row>
        <br />
        <Row>
            <Col>
            <MySlider/>
            </Col>
        </Row>
        <br />
        <h1>api way</h1>
        <Row>
{apiData.map((item:any)=>{return <Col><MyMuiCard img={item.image}/></Col>})}
        </Row>
        <br />
        <h1>nor mal way</h1>
        <Row>
            <Col>
            <MyMuiCard img={img}/>
            </Col>
            <Col>
            <MyMuiCard img={img1}/>
            </Col>
            <Col>
            <MyMuiCard img={img2}/>
            </Col>
            <Col>
            <MyMuiCard img={img}/>
            </Col>
        </Row>
    </Container>
    
    </>
}