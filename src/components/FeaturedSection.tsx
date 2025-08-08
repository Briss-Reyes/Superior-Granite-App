import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const features = [
  {
    title: 'Increase sales',
    description:
      'Consectetur pariatur irure exercitation sit amet id consectetur consectetur magna et Lorem labore qui velit.',
  },
  {
    title: 'Enterprise-ready',
    description:
      'Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco.',
  },
  {
    title: 'Unlimited growth',
    description:
      'Elit deserunt nisi esse duis cupidatat proident sit minim mollit officia pariatur incididunt in tempor.',
  },
  {
    title: 'Recommended by experts',
    description:
      'Velit sit tempor pariatur quis pariatur incididunt culpa dolor voluptate officia incididunt velit dolore.',
  },
  {
    title: 'Modern platform',
    description:
      'Laboris elit consectetur sint nisi eu mollit proident sit magna velit adipisicing consequat amet reprehenderit.',
  },
  {
    title: 'Reliable infrastructure',
    description:
      'Occaecat nostrud aliquip et excepteur ex irure. Elit fugiat veniam dolor deserunt nulla.',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto px-6 p-6">
          <div className="mb-16 text-center">
            <p className="mt-2 text-5xl lg:text-7xl font-bold text-accent font-bebas tracking-widest">
              Why Superior Granite?
            </p>
          </div>

          <div className="flex flex-wrap my-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`w-full border-b p-8 ${
                  index % 3 !== 2 ? 'md:border-r' : ''
                } md:w-1/2 lg:w-1/3 ${
                  index >= 3 ? 'md:border-b-0' : ''
                }`}
              >
                <div className="flex items-center mb-6">
                  <FiCheckCircle className="h-6 w-6 text-accent" />
                  <div className="ml-4 text-xl text-primary">{feature.title}</div>
                </div>
                <p className="leading-loose text-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;