import React from 'react';

function CartColumn() {
    return (
        <div className='container-fluid text-center d-none d-lg-block my-5' >
            <div className="row">
                {/* single column */}
                <div className="col-lg-2">
                    <div className="text-uppercase">
                        products
                    </div>
                </div>
                {/* end of single column */}
                {/* single column */}
                <div className="col-lg-2">
                    <div className="text-uppercase">
                        Name of Products
                    </div>
                </div>
                {/* end of single column */}
                {/* single column */}
                <div className="col-lg-2">
                    <div className="text-uppercase">
                        price
                    </div>
                </div>
                {/* end of single column */}
                {/* single column */}
                <div className="col-lg-2">
                    <div className="text-uppercase">
                        quantity
                    </div>
                </div>
                {/* end of single column */}
                {/* single column */}
                <div className="col-lg-2">
                    <div className="text-uppercase">
                        remove
                    </div>
                </div>
                {/* end of single column */}
                {/* single column */}
                <div className="col-lg-2">
                    <div className="text-uppercase">
                        totals
                    </div>
                </div>
                {/* end of single column */}
            </div>
        </div>
    );
}

export default CartColumn;