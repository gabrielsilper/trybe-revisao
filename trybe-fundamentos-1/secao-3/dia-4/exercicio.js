const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'.
// De olho na dica 👀: Note que o parâmetro da função já está sendo passado na chamada da função.

// Complete a função orderModifier() para que seu retorno seja: 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.
// Modifique o nome da pessoa compradora para Luiz Silva;
// Modifique o valor total da compra para R$ 50,00.

// como desestruturar o objeto order
const customerInfo = (fullOrder) => {
  const {
    name,
    phoneNumber,
    address: { street, number, apartment },
    order: {
      delivery: { deliveryPerson },
    },
  } = fullOrder;
  return `Olá, ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, ${street}, Número: ${number}, AP: ${apartment}.`;
};

console.log(customerInfo(order));


const stringifyOrder = (order) => {
    const { pizza: pizzaOrder, drinks: drinksOrder } = order;
    
    const pizza = Object.keys(pizzaOrder);
    const drinks = Object.values(drinksOrder).map((drink) => drink.type);
    
    if (pizza.length === 0 && drinks.length === 0) {
        return '';
    }
    if (pizza.length === 1 && drinks.length === 0) {
        return pizza[0];
    }
    if (pizza.length === 1 && drinks.length === 1) {
        return `${pizza[0]} e ${drinks[0]}`;
    }
    if (pizza.length === 0 && drinks.length === 1) {
        return drinks[0];
    }
    if (pizza.length === 0 && drinks.length > 1) {
        return (
            drinks.slice(0, drinks.length - 1).join(', ') +
            ' e ' +
            drinks[drinks.length - 1]
        );
    }
    if (pizza.length > 1 && drinks.length === 0) {
        return (
            pizza.slice(0, pizza.length - 1).join(', ') +
            ' e ' +
            pizza[pizza.length - 1]
        );
  }
  if (pizza.length > 1 && drinks.length === 1) {
      return pizza.join(', ') + ' e ' + drinks[0];
    }
    if (pizza.length === 1 && drinks.length > 1) {
        return (
            pizza[0] +
            ', ' +
            drinks.slice(0, drinks.length - 1).join(', ') +
            ' e ' +
            drinks[drinks.length - 1]
        );
    }
    if (pizza.length > 1 && drinks.length > 1) {
        return (
            pizza.join(', ') +
            ', ' +
            drinks.slice(0, drinks.length - 1).join(', ') +
            ' e ' +
            drinks[drinks.length - 1]
        );
    }
};

function calculateTotal(order) {
    const { pizza, drinks } = order;
    const totalPizza = Object.values(pizza).reduce(
        (acum, curr) => acum + curr.price * curr.amount,
        0
    );
    const totalDrinks = Object.values(drinks).reduce(
        (acum, curr) => acum + curr.price * curr.amount,
        0
    );
    
    return totalPizza + totalDrinks;
}

order.name = 'Luiz Silva';
order.order.pizza.marguerita.price = 20;

const orderModifier = (fullOrder) => {
  const { name, order } = fullOrder;
  const orderString = stringifyOrder(order);
  const totalPrice = calculateTotal(order);
  return `Olá, ${name}, o valor total de seu pedido de ${orderString} é R$ ${totalPrice}.`;
};

console.log(orderModifier(order));

const { drinks } = order.order;
drinks.orange = {
    type: 'Fanta Laranja',
    price: 10,
    amount: 2,
}

console.log(orderModifier(order));
