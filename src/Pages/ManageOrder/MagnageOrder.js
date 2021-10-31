import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';

const MagnageOrder = () => {
    const [manageOrder, setManageOrder] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://young-sands-62783.herokuapp.com/manage')
            .then(res => res.json())
            .then(data => {
                setManageOrder(data)
                setLoading(false)
            });

    }, [])

    //Update Loading
    const handleUpdate = id => {

    }
    //console.log(manageOrder)
    const handleManageDelete = id => {
        const process = window.confirm('Are you want to DELETE?')
        if (process) {
            const url = `https://young-sands-62783.herokuapp.com/manage/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Deleted successfully')
                        const remaining = manageOrder.filter(order => order._id !== id);
                        setManageOrder(remaining)
                    }
                })
        }

    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="container-fluid">
            <h2 className="text-center py-5">Total Order is Running {manageOrder.length}</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {manageOrder.map(order => <div
                    key={order._id}
                    className="col">
                    <div className="card h-100">
                        <img src={order.img} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">{order.service}</h5>
                            <h5 className="card-title">{order.status}</h5>
                            <p className="card-text">price: ${order.price}</p>
                            <p className="card-text">{order.des.slice(0, 150)}</p>
                            <button onClick={() => handleUpdate(order._id)} className="btn btn-primary mx-2">Aprove</button>
                            <button onClick={() => handleManageDelete(order._id)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>)
                }
            </div>

        </div>
    );
};

export default MagnageOrder;