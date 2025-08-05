import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

    const [method, setMethod] = useState('cod');
    const { navigate, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData(data => ({ ...data, [name]: value }));
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        // 🛒 Dummy order creation for frontend only
        let orderItems = [];
        for (const items in cartItems) {
            for (const size in cartItems[items]) {
                if (cartItems[items][size] > 0) {
                    const itemInfo = structuredClone(products.find(product => product._id === items));
                    if (itemInfo) {
                        itemInfo.size = size;
                        itemInfo.quantity = cartItems[items][size];
                        orderItems.push(itemInfo);
                    }
                }
            }
        }

        // 🎉 Just show success message
        toast.success(`Order Placed Successfully! (${method.toUpperCase()})`);
        setCartItems({});
        navigate('/orders');
    };

    return (
        <form onSubmit={onSubmitHandler} 
              className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

            {/* LEFT - Delivery Information */}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px] bg-white p-5 rounded-xl shadow-md'>
                <div className='my-3 text-xl font-semibold sm:text-2xl'>
                    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                </div>
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='input-box' type="text" placeholder='First name' />
                    <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='input-box' type="text" placeholder='Last name' />
                </div>
                <input required onChange={onChangeHandler} name='email' value={formData.email} className='input-box' type="email" placeholder='Email address' />
                <input required onChange={onChangeHandler} name='street' value={formData.street} className='input-box' type="text" placeholder='Street' />
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='city' value={formData.city} className='input-box' type="text" placeholder='City' />
                    <input onChange={onChangeHandler} name='state' value={formData.state} className='input-box' type="text" placeholder='State' />
                </div>
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='input-box' type="number" placeholder='Zipcode' />
                    <input required onChange={onChangeHandler} name='country' value={formData.country} className='input-box' type="text" placeholder='Country' />
                </div>
                <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='input-box' type="number" placeholder='Phone' />
            </div>

            {/* RIGHT - Payment Information */}
            <div className='mt-8 flex flex-col gap-6 w-full sm:max-w-[450px]'>
                {/* Cart Summary */}
                <div className='p-5 bg-white shadow-md rounded-xl'>
                    <CartTotal />
                </div>

                {/* Payment Method Selection */}
                <div className='p-5 bg-white shadow-md rounded-xl'>
                    <Title text1={'PAYMENT'} text2={'METHOD'} />
                    <div className='flex flex-col gap-3 mt-4'>
                        <PaymentOption 
                            label="Stripe" 
                            img={assets.stripe_logo} 
                            selected={method === 'stripe'} 
                            onClick={() => setMethod('stripe')} 
                        />
                        <PaymentOption 
                            label="Razorpay" 
                            img={assets.razorpay_logo} 
                            selected={method === 'razorpay'} 
                            onClick={() => setMethod('razorpay')} 
                        />
                        <PaymentOption 
                            label="Cash On Delivery" 
                            selected={method === 'cod'} 
                            onClick={() => setMethod('cod')} 
                        />
                    </div>

                    <div className='w-full mt-6 text-end'>
                        <button type='submit' className='px-12 py-3 text-sm text-white transition-all bg-black rounded-lg hover:bg-gray-800'>
                            PLACE ORDER
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
};

// Payment Option Button Component
const PaymentOption = ({ label, img, selected, onClick }) => (
    <div onClick={onClick} 
         className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:shadow-md transition-all ${selected ? 'border-green-500 bg-green-50' : ''}`}>
        <span className={`w-4 h-4 border rounded-full flex items-center justify-center ${selected ? 'bg-green-500 border-green-500' : ''}`}></span>
        {img && <img className='h-5' src={img} alt={label} />}
        <span className='font-medium text-gray-700'>{label}</span>
    </div>
);

// Common input style
const inputBox = `border border-gray-300 rounded-lg py-2 px-3.5 w-full focus:ring-2 focus:ring-black outline-none transition-all`;

export default PlaceOrder;
