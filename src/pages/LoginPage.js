import React, { Fragment } from 'react';

const LoginPage = () => {

    return (
        <Fragment>
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>Empty Page</h5>
                        <p>Use this page to start from scratch and place your custom content.</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(LoginPage, comparisonFn);
