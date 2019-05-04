import React from 'react';
import { Card, Collapse, ButtonGroup } from 'react-bootstrap';
import * as P from './parts';
import { SupportData } from '~/store/constance/supportData';

interface SimpleCardProps extends SupportData {
   getFile: (link: string) => void;
}

class SimpleCard extends React.Component<SimpleCardProps, { showContentCard: boolean }> {
   state = {
      showContentCard: false,
   };

   onToggleContent = () => {
      this.setState((p) => ({ showContentCard: !p.showContentCard }));
   };

   onGetFile = () => {
      this.props.getFile(this.props.link);
   };

   render() {
      return (
         <Card bg="light">
            <P.CardHeader>
               <P.CardHeaderInnerWrapper>
                  <P.TitleHeader>{this.props.title}</P.TitleHeader>
                  <ButtonGroup>
                     {this.props.description &&(
                        <P.Button variant="outline-secondary" onClick={this.onToggleContent}>Pokaż opis</P.Button>)
                     }
                     <P.Button variant="outline-secondary" onClick={this.onGetFile}>Pobierz</P.Button>
                  </ButtonGroup>
               </P.CardHeaderInnerWrapper>
            </P.CardHeader>
            <Collapse in={this.state.showContentCard}>
               <P.CardBody>
                  <Card.Text>{this.props.description}</Card.Text>
               </P.CardBody>
            </Collapse>
         </Card>
      );
   }
}

export default SimpleCard;
