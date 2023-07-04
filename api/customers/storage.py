from functools import lru_cache

from .schema import Customer, Order, Product

CustomerStorageType = dict[int, Customer]
OrdersStorageType = dict[int, Order]
ProductsStorageType = dict[int, Product]

CUSTOMERS: CustomerStorageType = {}
ORDERS: OrdersStorageType = {
    0: Order(
        customer_id=0,
        order_items=[0,1,2],
        order_id=0,
    ),
    1: Order(
        customer_id=1,
        order_items=[3,4,5],
        order_id=1,
    ),
}
PRODUCTS: ProductsStorageType = {
    0: Product(name="Product", price=0.0, product_info="Product Information", id=0),
    1: Product(name="Product1", price=1.0, product_info="Product Information1", id=1),
    2: Product(name="Product2", price=2.0, product_info="Product Information2", id=2),
    3: Product(name="Product3", price=3.0, product_info="Product Information3", id=3),
    4: Product(name="Product4", price=4.0, product_info="Product Information4", id=4),
    5: Product(name="Product5", price=5.0, product_info="Product Information5", id=5),
}


@lru_cache(maxsize=1)
def get_customers_storage() -> CustomerStorageType:
    return CUSTOMERS


@lru_cache(maxsize=1)
def get_orders_storage() -> OrdersStorageType:
    return ORDERS


@lru_cache(maxsize=1)
def get_products_storage() -> ProductsStorageType:
    return PRODUCTS