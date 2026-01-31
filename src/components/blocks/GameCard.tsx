import { Link } from 'react-router-dom';
import { HeartIcon } from '../ui/Icons';
import Badge from '../ui/Badge';

interface GameCardProps {
  id: string;
  title: string;
  image: string;
  price?: number;
  originalPrice?: number;
  discount?: number;
  tags?: string[];
  releaseDate?: string;
  rating?: number;
  variant?: 'default' | 'compact' | 'horizontal';
  showWishlist?: boolean;
}

export default function GameCard({
  id,
  title,
  image,
  price,
  originalPrice,
  discount,
  tags = [],
  variant = 'default',
  showWishlist = true,
}: GameCardProps) {
  if (variant === 'horizontal') {
    return (
      <Link
        to={`/store/game/${id}`}
        className="flex gap-4 p-3 bg-bg-highlight rounded-[--radius-md] hover:bg-bg-hover transition-colors group"
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-40 h-20 object-cover rounded-[--radius-sm]"
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-medium text-text-main group-hover:text-primary transition-colors">
              {title}
            </h3>
            {tags.length > 0 && (
              <div className="flex gap-1 mt-1">
                {tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="default" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            {price !== undefined && (
              <div className="flex items-center gap-2">
                {discount && (
                  <Badge variant="success">-{discount}%</Badge>
                )}
                {originalPrice && (
                  <span className="text-xs text-text-dim line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-sm font-medium text-text-main">
                  ${price.toFixed(2)}
                </span>
              </div>
            )}
            {showWishlist && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                className="p-1 text-text-dim hover:text-accent-red transition-colors"
              >
                <HeartIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link
        to={`/store/game/${id}`}
        className="block bg-bg-highlight rounded-[--radius-md] overflow-hidden hover:bg-bg-hover transition-colors group"
      >
        <div className="relative aspect-[2/1]">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-3">
          <h3 className="text-sm font-medium text-text-main truncate group-hover:text-primary transition-colors">
            {title}
          </h3>
          {price !== undefined && (
            <div className="flex items-center gap-2 mt-1">
              {discount && (
                <Badge variant="success" size="sm">-{discount}%</Badge>
              )}
              <span className="text-sm font-medium text-text-main">
                ${price.toFixed(2)}
              </span>
            </div>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/store/game/${id}`}
      className="block bg-bg-highlight rounded-[--radius-md] overflow-hidden hover:bg-bg-hover transition-colors group"
    >
      <div className="relative aspect-[16/9]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {showWishlist && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="absolute top-2 right-2 p-2 bg-bg-main/80 rounded-full text-text-dim hover:text-accent-red hover:bg-bg-main transition-colors"
          >
            <HeartIcon className="w-4 h-4" />
          </button>
        )}
        {discount && (
          <Badge variant="success" className="absolute bottom-2 left-2">
            -{discount}%
          </Badge>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-base font-medium text-text-main truncate group-hover:text-primary transition-colors">
          {title}
        </h3>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="default" size="sm">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {price !== undefined && (
          <div className="flex items-center gap-2 mt-3">
            {originalPrice && (
              <span className="text-sm text-text-dim line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-lg font-semibold text-text-main">
              ${price.toFixed(2)}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
