import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

function RenderDish({ dish }) {
    if (dish == null) {
        return (<div></div>);
    }
    return (
        <div className='col-12 col-md-5 m-1'>
            <Card>
                <CardImg width='100%' src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );

}

function RenderComments({ comments }) {
    if (comments == null) {
        return (<div></div>);
    }
    const showcmnts = comments.map((cmnt) => {
        return (
            <li key={cmnt.id}>
                <p>{cmnt.comment}</p>
                <p>--{cmnt.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }).format(new Date(cmnt.date))}
                </p>
            </li>
        );
    });

    return (
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {showcmnts}
            </ul>
        </div>
    );


}

const DishDetail = (props) => {
    const dish = props.dish;
    if (dish == null) {
        return (<div></div>);
    }

    return (
        <div className='container' key={dish} >
            <div className='row'>
                <RenderDish dish={dish}></RenderDish>
                <RenderComments comments={dish.comments}></RenderComments>
            </div>
        </div>
    );


}

export default DishDetail;