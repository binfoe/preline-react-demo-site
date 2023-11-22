import { FC } from 'react';
import Image from 'next/image';
import { BlockQuote } from 'preline-react/lib/blockquote';

const BlockquoteDemo: FC = () => {
  return (
    <div className='p-20'>
      <div className='mb-8'>
        <BlockQuote>
          I just wanted to say that I&apos;m very happy with my purchase so far. The documentation
          is outstanding - clear and detailed.
        </BlockQuote>
      </div>
      <div className='mb-8'>
        <BlockQuote leftBordered author='Josh Grazioso'>
          I just wanted to say that I&apos;m very happy with my purchase so far. The documentation
          is outstanding - clear and detailed.
        </BlockQuote>
      </div>
      <div className='mb-8'>
        <BlockQuote
          footer={
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <Image
                  width={300}
                  height={300}
                  className='h-10 w-10 rounded-full'
                  src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
                  alt='Image Description'
                />
              </div>
              <div className='ml-4'>
                <div className='text-base font-semibold text-gray-800 dark:text-gray-400'>
                  Josh Grazioso
                </div>
                <div className='text-xs text-gray-500'>Source title</div>
              </div>
            </div>
          }
        >
          I just wanted to say that I&apos;m very happy with my purchase so far. The documentation
          is outstanding - clear and detailed.
        </BlockQuote>
      </div>
    </div>
  );
};

export default BlockquoteDemo;
