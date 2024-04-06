import React, { useEffect, useState, KeyboardEvent } from 'react';
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import StarIcon from './star.svg';

export const Rating = ({className, isEditable, rating, setRating, ...props}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    contructRating(rating);
  }, [rating]);

  const contructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: React.JSX.Element, i: number) => {
      return (
        <span
          key={i}
          className={cn(styles.star, {
          [styles.filled]: i < currentRating,
          [styles.editable]: isEditable
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i+1)}
        >
          <StarIcon 
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
          />
        </span>
      )
    })
    setRatingArray(updatedArray);
  }

  const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code !== 'Space' || !setRating) {
      return
    }

    setRating(i);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }

    contructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(i)
  };
  
  return(
    <div {...props}>
      {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
    </div>
  );
}