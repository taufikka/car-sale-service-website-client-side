import React from 'react';

const PopularBrand = () => {
    // popular brand section
    return (
        <div className='container py-2 mb-3'>
            <h2 className='fw-bold text-center py-3'>Popular car brands</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card d-flex justify-content-center align-items-center pt-3">
                        <img style={{ width: '100px' }} src="https://media.carsnip.com/media/brand/bmw.svg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">BMW(200)</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card d-flex justify-content-center align-items-center pt-5">
                        <img style={{ width: '150px' }} src="https://media.carsnip.com/media/brand/audi.svg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title pt-3">Audi(220)</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card d-flex justify-content-center align-items-center pt-5">
                        <img style={{ width: '150px' }} src="https://media.carsnip.com/media/brand/ford.svg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title pt-3">Ford(230)</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card d-flex justify-content-center align-items-center pt-5">
                        <img style={{ width: '140px' }} src="https://media.carsnip.com/media/brand/kia.svg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">KIA(250)</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card d-flex justify-content-center align-items-center pt-5">
                        <img style={{ width: '150px' }} src="https://media.carsnip.com/media/brand/land_rover.svg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Land Rover(100)</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card d-flex justify-content-center align-items-center pt-4">
                        <img style={{ width: '100px' }} src="https://media.carsnip.com/media/brand/mercedes_benz.svg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Mercedes-Benz(150)</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card d-flex justify-content-center align-items-center pt-4">
                        <img style={{ width: '120px' }} src="https://media.carsnip.com/media/brand/toyota.svg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title pt-1">Toyota(400)</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card d-flex justify-content-center align-items-center pt-4">
                        <img style={{ width: '100px' }} src="https://media.carsnip.com/media/brand/volkswagen.svg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Volkswagen(180)</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularBrand;