import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCard } from '@/redux/slices/cartSlice';
import { addToLiked } from '@/redux/slices/likedSlice';
import Image from 'next/image';

const ControlPanel = ({ id, price }: { id: number; price: number }) => {
  const [quantity, setQuantity] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const dispatch = useDispatch();

  const addItemToCard = (id: number, quantity: number, price: number) => {
    dispatch(addToCard({ id, quantity, price }));
    setQuantity(1);
    setIsActive(!isActive);
  };

  const addItemToLiked = (id: number) => {
    dispatch(addToLiked({ id }));
    setIsLike(!isLike);
  };
  return (
    <div className="control-panel__wrapper">
      <div className="choose-button__wrapper">
        <button
          onClick={() => addItemToCard(id, quantity, price)}
          className={`choose-button__button ${isActive ? 'active' : ''}`}>
          {isActive ? 'В корзине' : 'В корзину'}
        </button>
        <div className={`choose-button__sub-buttons ${isActive ? 'hide' : ''}`}>
          <button
            disabled={quantity === 1}
            className="choose-button__sub-buttons-wrapper"
            onClick={() => setQuantity((prev) => prev - 1)}>
            <div className="choose-button__minus"></div>
          </button>
          <div className="choose-button__quantity">{quantity}</div>
          <button
            className="choose-button__sub-buttons-wrapper"
            onClick={() => setQuantity((prev) => prev + 1)}>
            <div className="choose-button__plus"></div>
          </button>
        </div>
      </div>
      <div onClick={() => addItemToLiked(id)} className={`circle ${isLike ? 'like' : ''}`}>
        {isLike ? (
          <Image src="/red-heart.svg" alt="heart" width={16} height={14} />
        ) : (
          <Image src="/heart.svg" alt="heart" width={16} height={14} />
        )}
      </div>
    </div>
  );
};

export default ControlPanel;
