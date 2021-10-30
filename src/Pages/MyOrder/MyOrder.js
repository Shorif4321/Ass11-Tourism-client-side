import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth()
    const [myOder, setMyOrder] = useState([]);

    useState(() => {
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [])
    console.log(myOder)

    const hanldeOrderDelete = id => {
        const process = window.confirm('Are you want to cancel Your Order?')
        if (process) {
            const url = `http://localhost:5000/myOrder/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Your Order is cancel successfully')
                        const remaining = myOder.filter(order => order._id !== id);
                        setMyOrder(remaining)
                    }
                })

        }
    }

    return (
        <div className="container-fluid">
            <h1 className="text-center py-3"> My ordered Items </h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    myOder.map(order => <div
                        key={order._id}
                        className="col">
                        <div className="card h-100">
                            <img src={order.img} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">{order.service}</h5>
                                <p className="card-text">price: ${order.price}</p>
                                <p className="card-text">{order.des.slice(0, 150)}</p>
                                <button onClick={() => hanldeOrderDelete(order._id)} className="btn btn-danger">Cancel</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrder;