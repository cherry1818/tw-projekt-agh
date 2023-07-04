from pydantic import BaseModel


class CustomerCreateSchema(BaseModel):
    name: str
    lastname: str
    email: str
    phone_number: str

    class Config:
        schema_extra = {
            "example": {
                "name": "Anna",
                "lastname": "Nowak",
                "phone_number": "123-456-789",
                "email": "annanowak@gmail.com",
            }
        }


class CustomerUpdateSchema(BaseModel):
    name: str | None
    lastname: str | None
    phone_number: str | None
    email: str | None

    class Config:
        schema_extra = {"example": {"name": "Anna", "lastname": "Nowak"}}


class Customer(CustomerCreateSchema):
    id: int


class OrderCreateSchema(BaseModel):
    customer_id: int
    order_items: list[int]

    class Config:
        schema_extra = {
            "example": {
                "customer_id": 0,
                "order_items": [0, 1, 2, 3],
            }
        }


class Order(OrderCreateSchema):
    order_id: int


class ProductCreateSchema(BaseModel):
    name: str
    price: float
    product_info: str

    class Config:
        schema_extra = {
            "example": {
                "name": "Product",
                "price": 0.0,
                "product_info": "Product information",
            }
        }


class Product(ProductCreateSchema):
    id: int