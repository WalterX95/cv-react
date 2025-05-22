import type sectionType from '../types/sectionType';

const SimpleSectionComponent: React.FC<sectionType> = ({titleSection,paragraphSection}) => {
    return (
      <>
<section id="chi-sono" className="bg-gray-100 dark:bg-gray-900 py-16">
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 bg-gray-100 dark:bg-gray-800 text-lg font-medium text-gray-900 dark:text-gray-100">
            {titleSection}
          </span>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {paragraphSection}
        </p>
      </div>
    </div>
  </section>
      </>
    );
} 

export default SimpleSectionComponent;