import { ComponentPropsWithRef, FC } from 'react';

interface SpriteSvgProps extends ComponentPropsWithRef<'svg'> {
  spritePath: string;
}

const SpriteSvg: FC<SpriteSvgProps> = ({
  id,
  width = 25,
  height = 25,
  fill = 'currentColor',
  spritePath,
  ...props
}) => {
  return (
    <svg width={width} height={height} fill={fill} {...props}>
      <use href={`${spritePath}.svg#${id}`} />
    </svg>
  );
};

export default SpriteSvg;
