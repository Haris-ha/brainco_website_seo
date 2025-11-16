import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import './GridMotion.css';

/**
 * @param {Object} props
 * @param {Array<string | React.ReactElement>} [props.items]
 * @param {string} [props.gradientColor]
 */
const GridMotion = ({ items = [], gradientColor = 'black' } = {}) => {
  const gridRef = useRef(null);
  /** @type {React.MutableRefObject<Array<HTMLDivElement | null>>} */
  const rowRefs = useRef([]);
  // 初始化时使用默认值，避免 SSR 错误
  const mouseXRef = useRef(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);

  const totalItems = 28;
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    // 确保在客户端执行
    if (typeof window === 'undefined') {
      return;
    }

    // 初始化鼠标位置
    mouseXRef.current = window.innerWidth / 2;

    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (/** @type {MouseEvent} */ e) => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 300;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];
      const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount = ((mouseXRef.current / windowWidth) * maxMoveAmount - maxMoveAmount / 2) * direction;
          const factor = inertiaFactors[index % inertiaFactors.length];

          if (factor !== undefined) {
            gsap.to(row, {
              x: moveAmount,
              duration: baseDuration + factor,
              ease: 'power3.out',
              overwrite: 'auto',
            });
          }
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (removeAnimationLoop) {
        removeAnimationLoop();
      }
    };
  }, []);

  return (
    <div className="noscroll loading" ref={gridRef}>
      <section
        className="intro"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="gridMotion-container">
          {[...Array.from({ length: 4 })].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="row"
              ref={(el) => {
                if (el && rowRefs.current) {
                  rowRefs.current[rowIndex] = el;
                }
              }}
            >
              {[...Array.from({ length: 7 })].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                return (
                  <div key={itemIndex} className="row__item">
                    <div className="row__item-inner" style={{ backgroundColor: '#111' }}>
                      {typeof content === 'string' && content.startsWith('http')
                        ? (
                            <div
                              className="row__item-img"
                              style={{
                                backgroundImage: `url(${content})`,
                              }}
                            >
                            </div>
                          )
                        : (
                            <div className="row__item-content">{content}</div>
                          )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="fullview"></div>
      </section>
    </div>
  );
};

export default GridMotion;
