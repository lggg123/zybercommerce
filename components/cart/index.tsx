import { getCart } from 'lib/shopify';
import { Cart } from 'lib/shopify/types';
import { GetServerSideProps } from 'next';
import CartModal from './modal';

type CartProps = {
  cart: Cart | undefined;
};

export default function Cart({ cart }: CartProps) {
  return <CartModal cart={cart} />;
}

export const getServerSideProps: GetServerSideProps<CartProps> = async (context) => {
  const cartId = context.req.cookies.cartId;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  return {
    props: {
      cart
    }
  };
};
