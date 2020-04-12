import React from 'react';
import '../card/styles.css';
import { Button, Form, FormFile } from 'react-bootstrap';

const Cardd = () => {

    return (
        <section className="card">
            <div className="card-columns">
                <div className="card mb-3">
                    <div className="card-body">
                        <h2 id="Base-title" className="card-title">Base Match</h2>
                        <div>
                            <FormFile action='file/upload' method='post' encType='multipart/form-data'>
                                <Form.Group className="card-options" controlId="baseUpload">
                                    <div className="select-container">
                                        <Form.Label>Envie sua Base</Form.Label>
                                        <Button className="find-csv" variant="outline-warning">Procurar CSV</Button>
                                    </div>
                                    <div className="select-container">
                                        <Form.Label>Base</Form.Label>
                                        <Form.Control className="base-select" as="select" size="sm" custom>
                                            <option>--Selecionar--</option>
                                            <option>Movida</option>
                                            <option>Localiza</option>
                                        </Form.Control>
                                    </div>

                                </Form.Group>
                            </FormFile >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cardd;