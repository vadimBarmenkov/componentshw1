import './App.css';
import './main.css';

function ShopItemFunc (props){
    return <div className="main-content">
        <h2>{props.item.brand}</h2>
        <h1>{props.item.title}</h1>
        <h3>{props.item.description}</h3>
        <div className="description">
            {props.item.descriptionFull}
        </div>
        <div className="highlight-window mobile">
            <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
            <div className="price">{props.item.currency + props.item.price}</div>
            <button>Добавить в корзину</button>
        </div>
    </div>;
}

function App() {

    const item = {
        brand: 'Tiger of Sweden',
        title: 'Leonard coat',
        description: 'Minimalistic coat in cotton-blend',
        descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
        price: 399,
        currency: '£'
    }

  return (
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItemFunc item={item} />
        </div>
      </div>
  );
}

export default App;
