import { useDispatch, useSelector } from 'react-redux';
import './Product.css';
import { useEffect } from 'react';
import { fetchProduct } from '../../redux/actions';
import { AppDispatch, RootState } from '../../redux/store';
import Loader from '../../components/Loader/Loader';

const Product = () => {
    const { loading, data } = useSelector((state: RootState) => state.product)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])

    return (
        <div className='productContainer'>
            {loading && <Loader />}
            {data && (
                <>
                <div className="titles">
                    <img src={data.image} alt="product" className='productImage' />
                    <h2 className='title'>{data.title}</h2>
                    <p className='subTitle'>{data.subtitle}</p>
                </div>
                <div className="tags">
                    {data.tags.map((tag: string, index: number) => (
                        <p className='tag' key={index}>{tag}</p>
                    ))}
                </div>
                </>
            )}
        </div>
    )
}

export default Product;