import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const FullProduct: React.FC = () => {

    const { id } = useParams();
    const [pizzaData, setPizzaData] = React.useState<{
        imageUrl: string,
        name: string,
        price: number
    }>();

    React.useEffect(() => {
        async function fetchPizza() {
            try {
                const {data} = await axios.get(`https://6314d07efa82b738f74eb750.mockapi.io/items/${id}`);
                setPizzaData(data);
            } catch (error) {
                alert('Ошибка получения продукта');
            }
        }

        fetchPizza();
    }, [id]);

    if (!pizzaData) {
        return <>Загрузка...</>;
    }

    return (
        <div className="full-pizza">
            <img src={pizzaData.imageUrl} alt="Pizza" />
            <div className="full-pizza-content">
                <h2>{pizzaData.name}</h2>
                <div className="full-pizza-price">{pizzaData.price}</div>
            </div>
        </div>
    )
}

export default FullProduct;