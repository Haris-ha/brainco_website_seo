'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface CheckoutStepsProps {
  currentStep: number; // 0, 1, 2
}

export function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  const t = useTranslations('Checkout');

  const steps = [
    { id: 0, title: t('step_1_title') },
    { id: 1, title: t('step_2_title') },
    { id: 2, title: t('step_3_title') },
  ];

  return (
    <div className="mb-8 md:mb-12">
      <div className="mx-auto max-w-[800px]">
        {/* 步骤指示器 */}
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-1 items-center">
              {/* 步骤圆圈 */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: currentStep >= step.id ? 1 : 0.8,
                    opacity: currentStep >= step.id ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`text-fluid-xl relative flex size-[40px] items-center justify-center rounded-full font-medium transition-all md:size-[60px] ${
                    currentStep >= step.id
                      ? 'bg-[#4F68D2] text-white'
                      : 'border-2 border-[#ccc] bg-white text-[#ccc]'
                  }`}
                >
                  {currentStep > step.id
                    ? (
                        <motion.svg
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="size-[20px] md:size-[30px]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </motion.svg>
                      )
                    : (
                        step.id + 1
                      )}
                </motion.div>

                {/* 步骤标题 */}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`text-fluid-base md:text-fluid-lg mt-2 text-center transition-colors ${
                    currentStep >= step.id ? 'text-[#333]' : 'text-[#ccc]'
                  }`}
                >
                  {step.title}
                </motion.span>
              </div>

              {/* 连接线 */}
              {index < steps.length - 1 && (
                <div className="relative mx-2 h-[2px] flex-1 bg-[#e0e0e0] md:mx-4">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{
                      width: currentStep > step.id ? '100%' : '0%',
                    }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-0 top-0 h-full bg-[#4F68D2]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

