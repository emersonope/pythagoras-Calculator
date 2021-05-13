import { Col, Row, Container, Card, Form, Button} from "react-bootstrap";
import React, { Component }from 'react';


class Pythagoras extends Component {

    constructor(props){
        super(props)
        this.state = {
            numberA: "",
            numberB: "",
            numberC: "",
            alpha: "",
            betha: "",
            perimeter: "",
            area: "",

        }

        this.handleA = this.handleA.bind(this);
        this.handleB = this.handleB.bind(this);
        this.handleC = this.handleC.bind(this);
        this.handleAlpha = this.handleAlpha.bind(this);
        this.handleBetha = this.handleBetha.bind(this);
        this.handlePerimeter = this.handlePerimeter.bind(this);
        this.handleArea = this.handleArea.bind(this);
        this.clickButtonCalc = this.clickButtonCalc.bind(this);
        this.clearData = this.clearData.bind(this);
    }

    handleA(event){
        this.setState({numberA: event.target.value})
    }

    handleB(event){
        this.setState({numberB: event.target.value})
    }

    handleC(event){
        this.setState({numberC: event.target.value})
    }

    handleAlpha(event){
        this.setState({alpha: event.target.value})
    }

    handleBetha(event){
        this.setState({betha: event.target.value})
    }

    handlePerimeter(event){
        this.setState({perimeter: event.target.value})
    }

    handleArea(event){
        this.setState({area: event.target.value})
    }

    input(event){
        this.setState({input: event.target.value})
    }

    clearData() {
        let {  
            numberA,
            numberB,
            numberC,
            alpha,
            betha,
            perimeter,
            area,
            msg, 
            msg1, 
            msg2, 
            msg3, 
            msg4, 
            msg5, 
            msg6,
            input,
        } = this.state

        numberA = "";
        numberB = "";
        numberC = "";
        alpha = "";
        betha = "";
        perimeter = "";
        area = "";
        msg = "";
        msg1 = "";
        msg2 = "";
        msg3 = "";
        msg4 = "";
        msg5 = "";
        msg6 = "";
        
       this.setState({numberA, numberB, numberC, alpha, betha, perimeter, area, msg, msg1, msg2, msg3, msg4, msg5, msg6})
        
    }

    clickButtonCalc(){
        let {  
            numberA,
            numberB,
            numberC,
            alpha,
            betha,
            perimeter,
            area,
        } = this.state

        const msg = "Pythagoras believes that there is a contradiction with values and here's the reason: valid equation: a² + b² = c² then we have: " + numberA + "²" + " + " + numberB + "² " + "= " + numberC + "²" + " which in this case it's not true." ;
        const msg1 = "This angle cannot be less than or equal to zero"
        const msg2 = "The sum of the angles cannot be greater than 90°";
        const msg3 = "The sum of the angles cannot be less than 90°";
        const msg4 = "Pythagoras believes that there is a contradiction with the inserted angle";
        const msg5 = "We need at least two values to do the math!";
        const msg6 = "It's not possible to calculate the opposite sides, perimeter or the area with this data!";

        let sumOfAngles = (parseFloat(alpha) + parseFloat(betha));
        let resultSumAngles = Math.round(sumOfAngles);

        var hypotenuse = Math.pow(numberC, 2);
        let hypotenuseRound = Math.round(hypotenuse);
        var sumAb = ((Math.pow(numberA, 2)) + (Math.pow(numberB, 2)))
        let sumAbRound = Math.round(sumAb);

        if ( numberA !== "" && numberB !== "" && numberC === "" && alpha === "" && betha === "") {
            const { msg, msg1, msg2, msg3, msg4, msg5, msg6 } = "";
            let powNumbersA = Math.pow(numberA,  2);
            let powNumbersB = Math.pow(numberB,  2);
            let resultC = Math.sqrt((powNumbersA+powNumbersB))

            let sinNumberAlpha = (57.2958 * (Math.asin((numberA / resultC))));
            let betha = 90 - sinNumberAlpha;

            let periTriangle = parseFloat(numberA) + parseFloat(numberB) + parseFloat(resultC);
            let areaTriangle = (numberA * numberB) / 2 ;

            let finalResultC = resultC.toFixed(2);
            let perimeterNumber = periTriangle.toFixed(2);
            let areaNumber = areaTriangle.toFixed(2);
            let Alpha = sinNumberAlpha.toFixed(0);
            let Betha = betha.toFixed(0);

            numberC = finalResultC;
            perimeter = perimeterNumber;
            area = areaNumber;
            alpha = Alpha;
            betha = Betha;

            this.setState({numberA, numberB, numberC, perimeter, area, alpha, betha, msg, msg1, msg2, msg3, msg4, msg5, msg6})

        } else if ( numberA !== "" && numberB === "" && numberC !== "" && alpha === "" && betha === "") { 
            const { msg, msg1, msg2, msg3, msg4, msg5, msg6 } = "";
            let powNumbersA = Math.pow(numberA,  2);
            let powNumbersC = Math.pow(numberC,  2);
            let resultB = Math.sqrt((powNumbersC - powNumbersA))

            let sinNumberAlpha = (57.2958 * (Math.asin((numberA / numberC))));
            let betha = 90 - sinNumberAlpha;

            var periTriangle = parseFloat(numberA) + parseFloat(resultB) + parseFloat(numberC);
            var areaTriangle = (numberA * resultB) / 2 ;
        
            let finalResultB = resultB.toFixed(2);
            let perimeterNumber = periTriangle.toFixed(2);
            let areaNumber = areaTriangle.toFixed(2);
            let Alpha = sinNumberAlpha.toFixed(0);
            let Betha = betha.toFixed(0);

            numberB = finalResultB;
            perimeter = perimeterNumber;
            area = areaNumber;
            alpha = Alpha;
            betha = Betha;

            this.setState({numberA, numberB, numberC, perimeter, area, alpha, betha, msg, msg1, msg2, msg3, msg4, msg5, msg6})
            
        } else if ( numberA === "" && numberB !== "" && numberC !== "" && alpha === "" && betha === "") { 
            const { msg, msg1, msg2, msg3, msg4, msg5, msg6 } = "";
            let powNumbersB = Math.pow(numberB,  2);
            let powNumbersC = Math.pow(numberC,  2);
            let resultA = Math.sqrt(powNumbersC-powNumbersB);

            let sinNumberAlpha = (57.2958 * (Math.asin((resultA / numberC))));
            let betha = 90 - sinNumberAlpha;

            var periTriangle = parseFloat(resultA) + parseFloat(numberB) + parseFloat(numberC);
            var areaTriangle = (resultA * numberB) / 2 ;
            
            let finalResultA = resultA.toFixed(2);
            let perimeterNumber = periTriangle.toFixed(2);
            let areaNumber = areaTriangle.toFixed(2);
            let Alpha = sinNumberAlpha.toFixed(0);
            let Betha = betha.toFixed(0);

            numberA = finalResultA;
            perimeter = perimeterNumber;
            area = areaNumber;
            alpha = Alpha;
            betha = Betha;
            
            this.setState({numberA, numberB, numberC, perimeter, area, alpha, betha, msg, msg1, msg2, msg3, msg4, msg5, msg6})

        } else if (numberA === "" && numberB === "" && numberC !== "" && alpha ==="" && betha !== "") {
            
            if (betha >= 90 || betha <= 0) {
                if (betha >= 90) {
                    this.setState({msg2})
                } else if (betha <= 0) {
                    this.setState({msg3})
                }
            } else {
                const { msg, msg1, msg2, msg3, msg4, msg5, msg6 } = "";
                let sinNumberAlpha = 90 - betha;
                let alphaRad = sinNumberAlpha * 0.01745;
                let resultA = Math.sin(alphaRad) * numberC;
                let resultB = Math.sqrt(((-Math.pow(resultA, 2)) + (Math.pow(numberC, 2))))
        
                var periTriangle = parseFloat(resultA) + parseFloat(resultB) + parseFloat(numberC);
                var areaTriangle = (resultA * resultB) / 2 ;
        
                let finalResultA = resultA.toFixed(2);
                let finalResultB = resultB.toFixed(2);
                let perimeterNumber = periTriangle.toFixed(2);
                let areaNumber = areaTriangle.toFixed(2);
                let Alpha = sinNumberAlpha.toFixed(0);
                
                numberA = finalResultA;
                numberB = finalResultB;
                perimeter = perimeterNumber;
                area = areaNumber;
                alpha = Alpha;
                
                this.setState({numberA, numberB, numberC, perimeter, area, alpha, betha, msg, msg1, msg2, msg3, msg4, msg5, msg6 })
            }
    
        } else if (numberA === "" && numberB === "" && numberC !== "" && alpha !== "" && betha === "") {
           
            if (alpha >= 90 || alpha <= 0) {
                if (alpha >= 90) {
                    this.setState({msg2})
                } else if (alpha <= 0) {
                    this.setState({msg3})
                }
            } else {
                const { msg, msg1, msg2, msg3, msg4, msg5, msg6 } = "";
                let sinNumberBetha= 90 - alpha;
                let bethaRad = alpha * 0.01745;
                let resultA = Math.sin(bethaRad) * numberC;
                let resultB = Math.sqrt(((-Math.pow(resultA, 2)) + (Math.pow(numberC, 2))))
        
                var periTriangle = parseFloat(resultA) + parseFloat(resultB) + parseFloat(numberC);
                var areaTriangle = (resultA * resultB) / 2 ;
        
                let finalResultA = resultA.toFixed(2);
                let finalResultB = resultB.toFixed(2);
                let perimeterNumber = periTriangle.toFixed(2);
                let areaNumber = areaTriangle.toFixed(2);
                let Betha = sinNumberBetha.toFixed(0);
        
                numberA = finalResultA;
                numberB = finalResultB;
                perimeter = perimeterNumber;
                area = areaNumber;
                betha = Betha;

                this.setState({numberA, numberB, numberC, perimeter, area, alpha, betha, msg, msg1, msg2, msg3, msg4, msg5, msg6 }) 
            }
    
        } else if (numberA === "" && numberB === "" && numberC !== "" && alpha !== "" && betha !== "") {
            
            if (resultSumAngles < 90 || resultSumAngles > 90) {
    
                if (resultSumAngles > 90) {
    
                    this.setState({msg2})
    
                } else if (resultSumAngles < 90) {
    
                   this.setState({msg3})
                }            
    
            } else if (resultSumAngles === 90) { 
                const { msg, msg1, msg2, msg3, msg4, msg5, msg6 } = "";
                let alphaRad = alpha * 0.01745;
                console.log(alphaRad)
                let resultA = numberC * Math.sin(alphaRad) ;
                console.log(resultA)
                let resultB = Math.sqrt(((-Math.pow(resultA, 2)) + (Math.pow(numberC, 2))))
                console.log(resultB)
    
                var periTriangle = parseFloat(resultA) + parseFloat(resultB) + parseFloat(numberC);
                var areaTriangle = (resultA * resultB) / 2 ;
        
                let finalResultA = resultA.toFixed(2);
                let finalResultB = resultB.toFixed(2);
                let perimeterNumber = periTriangle.toFixed(2);
                let areaNumber = areaTriangle.toFixed(2);
                
                numberA = finalResultA;
                numberB = finalResultB;
                perimeter = perimeterNumber;
                area = areaNumber;
    
                this.setState({numberA, numberB, numberC, perimeter, area, alpha, betha, msg, msg1, msg2, msg3, msg4, msg5, msg6}) 
              
            }         
        } else if (numberA !== "" && numberB === "" && numberC === "" && alpha === "" && betha !== "") {
            if (betha >= 90 || betha <= 0) {
                if (betha >= 90) {
                    this.setState({msg2})
                } else if (betha <= 0) {
                    this.setState({msg3})
                }
            } else {
                const { msg, msg1, msg2, msg3, msg4, msg5, msg6 } = "";
                let sinNumberAlpha = 90 - betha;
                let alphaRad = sinNumberAlpha * 0.01745;
                let resultC =  numberA / Math.sin(alphaRad);
                let resultB = Math.sqrt(((-Math.pow(numberA, 2)) + (Math.pow(resultC, 2))))
        
                var periTriangle = parseFloat(numberA) + parseFloat(resultB) + parseFloat(resultC);
                var areaTriangle = (numberA * resultB) / 2 ;
                
                let finalResultB = resultB.toFixed(2);
                let finalResultC = resultC.toFixed(2);
                let perimeterNumber = periTriangle.toFixed(2);
                let areaNumber = areaTriangle.toFixed(2);
                let Alpha = sinNumberAlpha.toFixed(0);
                
                numberB = finalResultB;
                numberC = finalResultC;
                perimeter = perimeterNumber;
                area = areaNumber;
                alpha = Alpha;
                
                this.setState({numberA, numberB, numberC, perimeter, area, alpha, betha, msg, msg1, msg2, msg3, msg4, msg5, msg6})
            }
    
        } else if (numberA !== "" && numberB === "" && numberC === "" && alpha !== "" && betha === "") {
            if (alpha >= 90) {
                if (alpha >= 90) {
                    this.setState({msg2})
                } else if (alpha <= 0) {
                    this.setState({msg3})
                }
            } else {
                const { msg, msg1, msg2, msg3, msg4, msg5, msg6 } = "";
                let sinNumberBetha= 90 - alpha;
                let bethaRad = alpha * 0.01745;
                let resultC =  numberA / Math.sin(bethaRad);
                let resultB = Math.sqrt(((-Math.pow(numberA, 2)) + (Math.pow(resultC, 2))))
        
                var periTriangle = parseFloat(numberA) + parseFloat(resultB) + parseFloat(resultC);
                var areaTriangle = (numberA * resultB) / 2 ;
                
                let finalResultB = resultB.toFixed(2);
                let finalResultC = resultC.toFixed(2);
                let perimeterNumber = periTriangle.toFixed(2);
                let areaNumber = areaTriangle.toFixed(2);
                let Betha = sinNumberBetha.toFixed(0);
                
                numberB = finalResultB;
                numberC = finalResultC;
                perimeter = perimeterNumber;
                area = areaNumber;
                betha = Betha;
                
                this.setState({numberA, numberB, numberC, perimeter, area, alpha, betha, msg, msg1, msg2, msg3, msg4, msg5, msg6})
            }
            
        } else if (numberA !== "" && numberB === "" && numberC === "" && alpha !== "" && betha !== "") {
                
            if (resultSumAngles < 90 || resultSumAngles > 90) {
    
                if (resultSumAngles > 90) {
    
                    this.setState({msg2})  
    
                } else if (resultSumAngles < 90) {
    
                    this.setState({msg3})
                }            
    
            } else if (resultSumAngles === 90) { 
                const { msg, msg1, msg2, msg3, msg4, msg5, msg6 } = "";
                let alphaRad = alpha * 0.01745;
                let resultC = numberA / Math.sin(alphaRad) ;
                let resultB = Math.sqrt(((-Math.pow(numberA, 2)) + (Math.pow(resultC, 2))))
    
                var periTriangle = parseFloat(numberA) + parseFloat(resultB) + parseFloat(resultC);
                var areaTriangle = (numberA * resultB) / 2 ;
        
                let finalResultB = resultB.toFixed(2);
                let finalResultC = resultC.toFixed(2);
                let perimeterNumber = periTriangle.toFixed(2);
                let areaNumber = areaTriangle.toFixed(2);
                
                numberB = finalResultB;
                numberC = finalResultC;
                perimeter = perimeterNumber;
                area = areaNumber;
                
                this.setState({numberA, numberB, numberC, perimeter, area, alpha, betha, msg, msg1, msg2, msg3, msg4, msg5, msg6})
               
            }         
        } else if (numberA === "" && numberB !== "" && numberC === "" && alpha !== "" && betha === "") {
            if (alpha >= 90) {
                if (alpha >= 90) {
                    this.setState({msg2})
                } else if (alpha <= 0) {
                    this.setState({msg3})
                }
            } else {
                const { msg, msg1, msg2, msg3, msg4, msg5, msg6 } = "";
                let sinNumberBetha = 90 - alpha;
                let bethaRad = sinNumberBetha * 0.01745;
                let resultC =  numberB / Math.sin(bethaRad);
                let resultA = Math.sqrt(((-Math.pow(numberB, 2)) + (Math.pow(resultC, 2))))
        
                var periTriangle = parseFloat(resultA) + parseFloat(numberB) + parseFloat(resultC);
                var areaTriangle = (resultA * numberB) / 2 ;
                
                let finalResultA = resultA.toFixed(2);
                let finalResultC = resultC.toFixed(2);
                let perimeterNumber = periTriangle.toFixed(2);
                let areaNumber = areaTriangle.toFixed(2);
                let Betha = sinNumberBetha.toFixed(0);
                
                numberA = finalResultA;
                numberC = finalResultC;
                perimeter = perimeterNumber;
                area = areaNumber;
                betha = Betha;
                
                this.setState({numberA, numberB, numberC, perimeter, area, alpha, betha, msg, msg1, msg2, msg3, msg4, msg5, msg6})
            }
    
        } else if (numberA === "" && numberB !== "" && numberC === "" && alpha === "" && betha !== "") {
            if (betha >= 90) {
                if (betha >= 90) {
                    this.setState({msg2})
                } else if (betha <= 0) {
                    this.setState({msg3})
                }
            } else {
                const { msg, msg1, msg2, msg3, msg4, msg5, msg6 } = "";
                let sinNumberAlpha = 90 - betha;
                let bethaRad = betha * 0.01745;
                let resultC =  numberB / Math.sin(bethaRad);
                let resultA = Math.sqrt(((-Math.pow(numberB, 2)) + (Math.pow(resultC, 2))))
        
                var periTriangle = parseFloat(resultA) + parseFloat(numberB) + parseFloat(resultC);
                var areaTriangle = (resultA * numberB) / 2 ;
                
                let finalResultA = resultA.toFixed(2);
                let finalResultC = resultC.toFixed(2);
                let perimeterNumber = periTriangle.toFixed(2);
                let areaNumber = areaTriangle.toFixed(2);
                let Alpha = sinNumberAlpha.toFixed(0);
                
                numberA = finalResultA;
                numberC = finalResultC;
                perimeter = perimeterNumber;
                area = areaNumber;
                alpha = Alpha;
                
                this.setState({numberA, numberB, numberC, perimeter, area, alpha, betha, msg, msg1, msg2, msg3, msg4, msg5, msg6})
            }

        } else if (numberA === "" && numberB !== "" && numberC === "" && alpha !== "" && betha !== "") {
                
            if (resultSumAngles < 90 || resultSumAngles > 90) {
    
                if (resultSumAngles > 90) {
    
                    this.setState({msg2})  
    
                } else if (resultSumAngles < 90) {
    
                    this.setState({msg3})
                    
                }            
    
            } else if (resultSumAngles === 90) { 
                const { msg, msg1, msg2, msg3, msg4, msg5, msg6 } = "";
                let alphaRad = betha * 0.01745;
                let resultC = numberB / Math.sin(alphaRad) ;
                let resultA = Math.sqrt(((-Math.pow(numberB, 2)) + (Math.pow(resultC, 2))))
    
                var periTriangle = parseFloat(resultA) + parseFloat(numberB) + parseFloat(resultC);
                var areaTriangle = (resultA * numberB) / 2 ;
        
                let finalResultA = resultA.toFixed(2);
                let finalResultC = resultC.toFixed(2);
                let perimeterNumber = periTriangle.toFixed(2);
                let areaNumber = areaTriangle.toFixed(2);
                
                numberA = finalResultA;
                numberC = finalResultC;
                perimeter = perimeterNumber;
                area = areaNumber;
                
                this.setState({numberA, numberB, numberC, perimeter, area, alpha, betha, msg, msg1, msg2, msg3, msg4, msg5, msg6})
            }         
        } else if (numberA !== "" && numberB !== "" && numberC !== "" && alpha === "" && betha === "") {
            
            if (hypotenuseRound !== sumAbRound) {
    
                this.setState({msg});
    
            } else if (hypotenuseRound === sumAbRound) { 
                const { msg, msg1, msg2, msg3, msg4, msg5, msg6 } = "";                
                let sinNumberAlpha = (57.2958 * (Math.asin((numberA / numberC))));
                let betha = 90 - sinNumberAlpha;
    
                var periTriangle = parseFloat(numberA) + parseFloat(numberB) + parseFloat(numberC);
                var areaTriangle = (numberA * numberB) / 2 ;
        
                let perimeterNumber = periTriangle.toFixed(2);
                let areaNumber = areaTriangle.toFixed(2);
                let Alpha = sinNumberAlpha.toFixed(0);
                let Betha = betha.toFixed(0);

                perimeter = perimeterNumber;
                area = areaNumber;
                alpha = Alpha;
                betha = Betha;
            
                this.setState({numberA, numberB, numberC, perimeter, area, alpha, betha, msg, msg1, msg2, msg3, msg4, msg5, msg6})
               
            }         
        } else if (numberA !== "" && numberB !== "" && numberC !== "" && alpha !== "" && betha !== "") {
            let angleAlpha = (57.2958 * (Math.asin((numberA / numberC))));
            let alphaFinal = Math.round(angleAlpha)
                
            if (resultSumAngles < 90 || resultSumAngles > 90) {
    
                if (resultSumAngles > 90) {
    
                    this.setState({msg2});
    
                } else if (resultSumAngles < 90) {
    
                    this.setState({msg3});
                }
    
            } else if (hypotenuseRound !== sumAbRound)  {
    
                this.setState({msg});
    
            } else if (alphaFinal !== alpha) {
    
                this.setState({msg4});
    
            } else if (resultSumAngles === 90) { 
                const { msg, msg1, msg2, msg3, msg4, msg5, msg6 } = "";
    
                var periTriangle = parseFloat(numberA) + parseFloat(numberB) + parseFloat(numberC);
                var areaTriangle = (numberA * numberB) / 2 ;
        
                let perimeterNumber = periTriangle.toFixed(2);
                let areaNumber = areaTriangle.toFixed(2);
                
                perimeter = perimeterNumber;
                area = areaNumber;
            
                this.setState({numberA, numberB, numberC, perimeter, area, alpha, betha, msg, msg1, msg2, msg3, msg4, msg5, msg6})
    
            }         
        } else if (numberA !== "" && numberB !== "" && numberC !=="" && alpha !=="" && betha === "") {
            let angleAlpha = (57.2958 * (Math.asin((numberA / numberC))));
            let alphaFinal = Math.round(angleAlpha)
        
            if (hypotenuseRound !== sumAbRound || alpha <= 0) {
            
                if (alpha <= 0) {
    
                    this.setState({msg1});
    
                } else {
                    
                    this.setState({msg});
                } 
            
            } else if (alphaFinal !== alpha) {
    
                this.setState({msg4});
    
            } else if (hypotenuseRound === sumAbRound) {
                const { msg, msg1, msg2, msg3, msg4, msg5, msg6 } = "";
                let bethaAngle = 90 - alpha;
    
                var periTriangle = parseFloat(numberA) + parseFloat(numberB) + parseFloat(numberC);
                var areaTriangle = (numberA * numberB) / 2 ;
    
                let perimeterNumber = periTriangle.toFixed(2);
                let areaNumber = areaTriangle.toFixed(2);
                let Betha = bethaAngle.toFixed(0);
    
                perimeter = perimeterNumber;
                area = areaNumber;
                betha = Betha
            
                this.setState({numberA, numberB, numberC, perimeter, area, alpha, betha, msg, msg1, msg2, msg3, msg4, msg5, msg6})

            }
        } else if (numberA !== "" && numberB !== "" && numberC !== "" && alpha === "" && betha !== "") {
            let angleBetha = (57.2958 * (Math.asin((numberB / numberC))));
            let betaFinal = Math.round(angleBetha)
            console.log("aqui " + betaFinal)
                
            if (hypotenuseRound !== sumAbRound || betha <= 0) {
    
                if (betha <= 0) {
    
                    this.setState({msg1});
    
                } else {
    
                    this.setState({msg});
    
                }                
    
            } else if (betaFinal !== betha) {
    
                this.setState({msg4});
    
            } else if (hypotenuseRound === sumAbRound) {
                const { msg, msg1, msg2, msg3, msg4, msg5, msg6 } = "";
                let sinNumberAlpha = 90 - betha;
    
                var periTriangle = parseFloat(numberA) + parseFloat(numberB) + parseFloat(numberC);
                var areaTriangle = (numberA * numberB) / 2 ;
    
                let perimeterNumber = periTriangle.toFixed(2);
                let areaNumber = areaTriangle.toFixed(2);
                let Alpha = sinNumberAlpha.toFixed(0);
    
                perimeter = perimeterNumber;
                area = areaNumber;
                alpha = Alpha;
                alpha = Alpha;
            
                this.setState({numberA, numberB, numberC, perimeter, area, alpha, betha, msg, msg1, msg2, msg3, msg4, msg5, msg6})

            } 
    
        } else if (numberA !== "" && numberB === "" && numberC === "" && alpha === "" && betha === "") {
            
            this.setState({msg5});

        } else if (numberA === "" && numberB !== "" && numberC === "" && alpha === "" && betha === "") {
                
            this.setState({msg5});

        } else if (numberA === "" && numberB === "" && numberC !== "" && alpha === "" && betha === "") {
            
            this.setState({msg5});

        } else if (numberA === "" && numberB === "" && numberC === "" && alpha !== "" && betha === "") {
            
            this.setState({msg5});

        } else if (numberA === "" && numberB === "" && numberC === "" && alpha === "" && betha !== "") {
            
            this.setState({msg5});

        } else if (numberA === "" && numberB === "" && numberC === "" && alpha === "" && betha === "") {
            
            this.setState({msg5});

        } else if (numberA === "" && numberB === "" && numberC === "" && alpha !== "" && betha !== "") {
            
            this.setState({msg6});
        } 
    }
    render(){
        return (
            <Container>
                <Card className="bg-dark text-white">
                    <Card.Header>
                        <h3>Pythagoras Calculator</h3>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>a</Form.Label>
                                        <input className="form-control" type="number" onChange={this.handleA}></input>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>b</Form.Label>
                                        <input className="form-control" type="number" onChange={this.handleB} ></input>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>c</Form.Label>
                                        <input className="form-control" type="number" onChange={this.handleC}></input>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Alpha</Form.Label>
                                        <input className="form-control" type="number" onChange={this.handleAlpha}></input>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <Form.Group>
                                        <Form.Label>Betha</Form.Label>
                                        <input className="form-control" type="number"  onChange={this.handleBetha}></input>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col>
                                    <h5>A: {this.state.numberA}</h5>
                                </Col>
                                <Col>
                                    <h5>B: {this.state.numberB}</h5>
                                </Col>
                                <Col>
                                    <h5>C: {this.state.numberC}</h5>
                                </Col>
                                <Col>
                                    <h5>Alpha: {this.state.alpha}</h5>
                                </Col>
                                <Col>
                                    <h5>Betha: {this.state.betha}</h5>
                                </Col>
                                <Col>
                                    <h5>P: {this.state.perimeter}</h5>
                                </Col>
                                <Col>
                                    <h5>Area: {this.state.area}</h5>
                                </Col>
                            </Row>
                            
                            <Button className="m-3" onClick={this.clearData}>Clear</Button>
                            
                            <Button className="m-3" onClick={this.clickButtonCalc}>Enter</Button>
                            
                            <Row className="mt-3">
                                <Col>
                                    <h5>{this.state.msg}</h5>
                                    <h5>{this.state.msg1}</h5>
                                    <h5>{this.state.msg2}</h5>
                                    <h5>{this.state.msg3}</h5>
                                    <h5>{this.state.msg4}</h5>
                                    <h5>{this.state.msg5}</h5>
                                    <h5>{this.state.msg6}</h5>
                                </Col>
                            </Row>
                        </Form>
                       
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default Pythagoras;