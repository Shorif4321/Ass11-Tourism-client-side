import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Loading from '../Loading/Loading';

const MyOrder = () => {
    const { user } = useAuth()
    const [myOder, setMyOrder] = useState([]);
    const [loading, setLoading] = useState(true)

    useState(() => {
        fetch(`https://young-sands-62783.herokuapp.com/myOrder/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrder(data)
                setLoading(false)
            })
    }, [])

    const hanldeOrderDelete = id => {
        const process = window.confirm('Are you want to cancel Your Order?')
        if (process) {
            const url = `https://young-sands-62783.herokuapp.com/myOrder/${id}`
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
    if (loading) {
        return <Loading></Loading>
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
                                <h5 className="card-title">{order.status}</h5>
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